import { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { FileUpload as FileUploadFromEntry } from '../../index';
import { Field } from '../Field/Field';
import { FieldError } from '../Field/FieldError';
import { Label } from '../Field/Label';
import { FileUpload } from './FileUpload';

function pdf(name = 'devoir.pdf', size = 8): File {
  return new File(['x'.repeat(size)], name, { type: 'application/pdf' });
}

describe('FileUpload', () => {
  it('is exported from the package entrypoint', () => {
    expect(FileUploadFromEntry).toBe(FileUpload);
  });

  it('forwards a ref to the native file input', () => {
    const ref = createRef<HTMLInputElement>();
    render(<FileUpload label="Devoir" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current).toHaveAttribute('type', 'file');
  });

  it('names the hidden input from the built-in label', () => {
    render(<FileUpload label="Devoir" name="assignment" />);
    const input = screen.getByLabelText('Devoir');
    expect(input).toHaveAttribute('type', 'file');
    expect(input).toHaveAttribute('name', 'assignment');
    expect(input).toHaveClass('d-ui-visually-hidden');
    expect(input).toHaveAttribute('tabindex', '-1');
  });

  it('lists selected files and lets the keyboard user remove them', async () => {
    const user = userEvent.setup();
    const onFilesChange = vi.fn();
    render(<FileUpload label="Devoir" dropzone={false} onFilesChange={onFilesChange} />);
    const input = screen.getByLabelText('Devoir');
    await user.upload(input, pdf());
    expect(onFilesChange).toHaveBeenCalledWith([
      expect.objectContaining({ name: 'devoir.pdf' }),
    ]);
    expect(screen.getByText('devoir.pdf', { exact: false })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Retirer devoir.pdf' }));
    expect(onFilesChange).toHaveBeenLastCalledWith([]);
    expect(
      screen.queryByRole('list', { name: 'Fichiers sélectionnés' }),
    ).not.toBeInTheDocument();
  });

  it('rejects a file that exceeds maxSize with a clear error', async () => {
    const user = userEvent.setup();
    const onReject = vi.fn();
    render(
      <FileUpload label="Devoir" dropzone={false} maxSize={4} onReject={onReject} />,
    );
    await user.upload(screen.getByLabelText('Devoir'), pdf('gros.pdf', 20));
    expect(onReject).toHaveBeenCalled();
    expect(screen.getByRole('alert')).toHaveTextContent('gros.pdf dépasse');
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('rejects a file outside accept', () => {
    const onReject = vi.fn();
    render(
      <FileUpload label="Devoir" accept=".pdf,application/pdf" onReject={onReject} />,
    );
    fireEvent.drop(screen.getByText(/Glissez les fichiers/).closest('div')!, {
      dataTransfer: {
        files: [new File(['x'], 'photo.png', { type: 'image/png' })],
      },
    });
    expect(onReject).toHaveBeenCalledWith([expect.objectContaining({ reason: 'type' })]);
    expect(screen.getByRole('alert')).toHaveTextContent('n’est pas un type accepté');
  });

  it('does not open or change files when disabled', async () => {
    const user = userEvent.setup();
    const onFilesChange = vi.fn();
    render(
      <FileUpload
        label="Devoir"
        dropzone={false}
        disabled
        onFilesChange={onFilesChange}
      />,
    );
    expect(screen.getByLabelText('Devoir')).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Choisir un fichier' })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'Choisir un fichier' }));
    expect(onFilesChange).not.toHaveBeenCalled();
  });

  it('marks the control invalid without relying on colour alone', () => {
    render(<FileUpload label="Devoir" invalid error="Requis" dropzone={false} />);
    expect(screen.getByLabelText('Devoir')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('alert')).toHaveTextContent('Requis');
  });

  it('accepts a drop on the optional dropzone', () => {
    const onFilesChange = vi.fn();
    render(<FileUpload label="Devoir" dropzone onFilesChange={onFilesChange} />);
    const zone = screen.getByText(/Glissez les fichiers/).closest('div');
    expect(zone).toBeTruthy();
    fireEvent.drop(zone!, {
      dataTransfer: { files: [pdf('drop.pdf')] },
    });
    expect(onFilesChange).toHaveBeenCalledWith([
      expect.objectContaining({ name: 'drop.pdf' }),
    ]);
  });

  it('appends files when multiple is set', async () => {
    const user = userEvent.setup();
    const onFilesChange = vi.fn();
    render(
      <FileUpload
        label="Devoir"
        dropzone={false}
        multiple
        onFilesChange={onFilesChange}
      />,
    );
    const input = screen.getByLabelText('Devoir');
    await user.upload(input, pdf('un.pdf'));
    await user.upload(input, pdf('deux.pdf'));
    expect(onFilesChange).toHaveBeenLastCalledWith([
      expect.objectContaining({ name: 'un.pdf' }),
      expect.objectContaining({ name: 'deux.pdf' }),
    ]);
    expect(
      screen.getByRole('button', { name: 'Choisir des fichiers' }),
    ).toBeInTheDocument();
  });

  it('composes with Field for id, disabled and invalid', () => {
    render(
      <Field invalid disabled>
        <Label>Pièce jointe</Label>
        <FileUpload dropzone={false} />
        <FieldError>Requis</FieldError>
      </Field>,
    );
    const input = screen.getByLabelText('Pièce jointe');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input.getAttribute('aria-describedby')).toBeTruthy();
    expect(screen.getByRole('alert')).toHaveTextContent('Requis');
  });
});
