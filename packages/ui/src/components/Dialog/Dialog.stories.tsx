import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ReactNode } from 'react';
import { dialogArgTypes } from '../../../.storybook/arg-types';
import {
  dialogCopy,
  docsLocale,
  type DialogDocsCopy,
} from '../../../.storybook/docs-locale';
import { componentSource, componentSourceFn } from '../../../.storybook/docs-source';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Select } from '../Select/Select';
import { TextInput } from '../TextInput/TextInput';
import { Dialog, type DialogSize } from './Dialog';
import { DialogActions, DialogBody, DialogDescription, DialogTitle } from './DialogParts';

const importDialog =
  "import { useState } from 'react';\nimport { Button, Dialog, DialogActions, DialogDescription, DialogTitle } from 'd-ui';";

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: dialogArgTypes,
  parameters: {
    controls: {
      include: ['size', 'alert', 'dismissible'],
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Chaque story a besoin d'un déclencheur : un `Dialog` est toujours contrôlé. */
const closed = { open: false, onOpenChange: () => {}, children: null };

function Trigger({
  copy,
  label,
  variant = 'secondary',
  children,
}: {
  copy: DialogDocsCopy;
  label?: string;
  variant?: 'primary' | 'secondary';
  children: (open: boolean, setOpen: (next: boolean) => void) => ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center p-6">
      <Button variant={variant} onClick={() => setOpen(true)}>
        {label ?? copy.open}
      </Button>
      {children(open, setOpen)}
    </div>
  );
}

export const Default: Story = {
  name: 'Par défaut',
  args: closed,
  parameters: componentSourceFn(
    importDialog,
    `const [open, setOpen] = useState(false);

return (
    <>
        <Button variant="secondary" onClick={() => setOpen(true)}>Ouvrir</Button>
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTitle>Passer à l'offre annuelle</DialogTitle>
            <DialogDescription>
                La facturation devient annuelle et le changement prend effet immédiatement.
            </DialogDescription>
            <DialogActions>
                <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
                <Button variant="primary" onClick={() => setOpen(false)}>S'abonner</Button>
            </DialogActions>
        </Dialog>
    </>
);`,
  ),
  render: (_, { globals }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return (
      <Trigger copy={copy}>
        {(open, setOpen) => (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTitle>{copy.planTitle}</DialogTitle>
            <DialogDescription>{copy.planBody}</DialogDescription>
            <DialogActions>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.subscribe}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Trigger>
    );
  },
};

export const TintedFooter: Story = {
  name: 'Pied de page teinté',
  args: closed,
  parameters: componentSource(
    importDialog,
    `<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`,
  ),
  render: (_, { globals }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return (
      <Trigger copy={copy}>
        {(open, setOpen) => (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTitle>{copy.deactivateTitle}</DialogTitle>
            <DialogDescription>{copy.deactivateBody}</DialogDescription>
            <DialogActions surface>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.deactivate}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Trigger>
    );
  },
};

export const CenteredSingleAction: Story = {
  name: 'Centré, action unique',
  args: closed,
  parameters: componentSource(
    importDialog,
    `<Dialog open={open} onOpenChange={setOpen} size="sm">
    <div className="text-center">
        <Icon as={CheckIcon} size="lg" className="text-success" />
        <DialogTitle className="pe-0 mt-3">Paiement accepté</DialogTitle>
        <DialogDescription>Le reçu vient de partir vers votre adresse de facturation.</DialogDescription>
    </div>
    <DialogActions align="stacked">
        <Button variant="primary" onClick={() => setOpen(false)}>J'ai compris</Button>
    </DialogActions>
</Dialog>`,
  ),
  render: (_, { globals }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return (
      <Trigger copy={copy}>
        {(open, setOpen) => (
          <Dialog open={open} onOpenChange={setOpen} size="sm">
            <div className="text-center">
              <span className="bg-success/15 text-success mx-auto flex size-12 items-center justify-center rounded-full">
                <Icon as={CheckIcon} size="lg" />
              </span>
              <DialogTitle className="mt-3 pe-0">{copy.paidTitle}</DialogTitle>
              <DialogDescription>{copy.paidBody}</DialogDescription>
            </div>
            <DialogActions align="stacked">
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.gotIt}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Trigger>
    );
  },
};

export const CenteredWideButtons: Story = {
  name: 'Centré, actions pleine largeur',
  args: closed,
  parameters: componentSource(
    importDialog,
    `<Dialog open={open} onOpenChange={setOpen} size="sm">
    <DialogTitle className="pe-0 text-center">Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription className="text-center">
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="stacked">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`,
  ),
  render: (_, { globals }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return (
      <Trigger copy={copy}>
        {(open, setOpen) => (
          <Dialog open={open} onOpenChange={setOpen} size="sm">
            <DialogTitle className="pe-0 text-center">{copy.leaveTitle}</DialogTitle>
            <DialogDescription className="text-center">
              {copy.leaveBody}
            </DialogDescription>
            <DialogActions align="stacked">
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.leave}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Trigger>
    );
  },
};

export const Alert: Story = {
  name: 'Alerte',
  args: closed,
  parameters: componentSource(
    importDialog,
    `<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Désactiver le compte</DialogTitle>
    <DialogDescription>
        Le compte sera désactivé et les données associées définitivement supprimées.
        Cette action est irréversible.
    </DialogDescription>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Désactiver</Button>
    </DialogActions>
</Dialog>`,
  ),
  render: (_, { globals }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return (
      <Trigger copy={copy} variant="primary" label={copy.deactivate}>
        {(open, setOpen) => (
          <Dialog open={open} onOpenChange={setOpen} alert>
            <div className="flex gap-4">
              <span className="bg-danger/15 text-danger flex size-10 shrink-0 items-center justify-center rounded-full">
                <Icon as={ExclamationTriangleIcon} size="md" />
              </span>
              <div>
                <DialogTitle className="pe-0">{copy.deactivateTitle}</DialogTitle>
                <DialogDescription>{copy.deactivateBody}</DialogDescription>
              </div>
            </div>
            <DialogActions>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.deactivate}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Trigger>
    );
  },
};

export const WithDismissButton: Story = {
  name: 'Avec croix de fermeture',
  args: closed,
  parameters: componentSource(
    importDialog,
    `<Dialog open={open} onOpenChange={setOpen} dismissible dismissLabel="Fermer">
    <DialogTitle>Nouvelle version disponible</DialogTitle>
    <DialogDescription>
        Rechargez la page pour récupérer la dernière version.
    </DialogDescription>
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Recharger</Button>
    </DialogActions>
</Dialog>`,
  ),
  render: (_, { globals }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return (
      <Trigger copy={copy}>
        {(open, setOpen) => (
          <Dialog
            open={open}
            onOpenChange={setOpen}
            dismissible
            dismissLabel={copy.close}
          >
            <DialogTitle>{copy.updateTitle}</DialogTitle>
            <DialogDescription>{copy.updateBody}</DialogDescription>
            <DialogActions>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.reload}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Trigger>
    );
  },
};

export const AlertLeftAligned: Story = {
  name: 'Alerte, actions à gauche',
  args: closed,
  parameters: componentSource(
    importDialog,
    `<Dialog open={open} onOpenChange={setOpen} alert>
    <DialogTitle>Quitter sans enregistrer ?</DialogTitle>
    <DialogDescription>
        Les modifications apportées depuis la dernière sauvegarde seront perdues.
    </DialogDescription>
    <DialogActions align="start">
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Quitter</Button>
    </DialogActions>
</Dialog>`,
  ),
  render: (_, { globals }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return (
      <Trigger copy={copy} variant="primary" label={copy.leave}>
        {(open, setOpen) => (
          <Dialog open={open} onOpenChange={setOpen} alert>
            <DialogTitle>{copy.leaveTitle}</DialogTitle>
            <DialogDescription>{copy.leaveBody}</DialogDescription>
            <DialogActions align="start">
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.leave}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Trigger>
    );
  },
};

const SIZES: DialogSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];

function SizesDemo({ copy }: { copy: DialogDocsCopy }) {
  const [size, setSize] = useState<DialogSize | null>(null);
  return (
    <div className="flex flex-wrap justify-center gap-3 p-6">
      {SIZES.map((value) => (
        <Button key={value} variant="secondary" onClick={() => setSize(value)}>
          {value}
        </Button>
      ))}
      <Dialog
        open={size !== null}
        onOpenChange={(next) => setSize(next ? size : null)}
        size={size ?? 'md'}
        dismissible
        dismissLabel={copy.close}
      >
        <DialogTitle>{`${copy.sizeTitle} — ${size ?? ''}`}</DialogTitle>
        <DialogDescription>{copy.sizeBody}</DialogDescription>
        <DialogActions>
          <Button variant="primary" onClick={() => setSize(null)}>
            {copy.close}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export const Sizes: Story = {
  name: 'Tailles',
  args: closed,
  parameters: componentSource(
    importDialog,
    `<Dialog open={open} onOpenChange={setOpen} size="xl">
    <DialogTitle>Largeur du panneau</DialogTitle>
    <DialogDescription>
        Sous le point de rupture sm, toutes les tailles occupent la largeur disponible.
    </DialogDescription>
</Dialog>`,
  ),
  render: (_, { globals }) => <SizesDemo copy={dialogCopy(docsLocale(globals.locale))} />,
};

export const Animation: Story = {
  name: 'Animation',
  args: closed,
  parameters: componentSource(
    importDialog,
    `<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Ouverture animée</DialogTitle>
    <DialogDescription>
        Le fond apparaît en opacité, le panneau monte de quelques pixels.
    </DialogDescription>
</Dialog>`,
  ),
  render: (_, { globals }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return (
      <Trigger copy={copy}>
        {(open, setOpen) => (
          <Dialog
            open={open}
            onOpenChange={setOpen}
            dismissible
            dismissLabel={copy.close}
          >
            <DialogTitle>{copy.animationTitle}</DialogTitle>
            <DialogDescription>{copy.animationBody}</DialogDescription>
            <DialogActions>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.close}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Trigger>
    );
  },
};

export const WithForm: Story = {
  name: 'Avec formulaire',
  args: closed,
  parameters: componentSource(
    importDialog,
    `<Dialog open={open} onOpenChange={setOpen} dismissible>
    <DialogTitle>Inviter un membre</DialogTitle>
    <DialogBody>
        <form id="invite" onSubmit={onSubmit} className="grid gap-4">
            <TextInput type="email" name="email" label="Adresse e-mail" required />
            <Select name="role" label="Rôle" options={roles} defaultValue="editor" />
        </form>
    </DialogBody>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" type="submit" form="invite">Envoyer l'invitation</Button>
    </DialogActions>
</Dialog>`,
  ),
  render: (_, { globals }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return (
      <Trigger copy={copy}>
        {(open, setOpen) => (
          <Dialog
            open={open}
            onOpenChange={setOpen}
            dismissible
            dismissLabel={copy.close}
          >
            <DialogTitle>{copy.inviteTitle}</DialogTitle>
            <DialogBody>
              <form
                id="d-ui-invite"
                className="grid gap-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setOpen(false);
                }}
              >
                <TextInput
                  type="email"
                  name="email"
                  label={copy.emailLabel}
                  placeholder={copy.emailPlaceholder}
                  helper={copy.inviteBody}
                  required
                />
                <Select
                  name="role"
                  label={copy.roleLabel}
                  defaultValue="editor"
                  options={[
                    { value: 'editor', label: copy.roleEditor },
                    { value: 'viewer', label: copy.roleViewer },
                  ]}
                />
              </form>
            </DialogBody>
            <DialogActions surface>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" type="submit" form="d-ui-invite">
                {copy.send}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Trigger>
    );
  },
};
