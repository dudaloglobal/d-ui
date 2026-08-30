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
import { AlertDialog, type AlertDialogKind } from './AlertDialog';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Select } from '../Select/Select';
import { TextInput } from '../TextInput/TextInput';
import { Dialog, type DialogSize } from './Dialog';
import {
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './DialogParts';

const importDialog =
  "import { useState } from 'react';\nimport { Button, Dialog, DialogActions, DialogDescription, DialogTitle } from 'd-ui';";

const importAlertDialog =
  "import { useState } from 'react';\nimport { AlertDialog, Button } from 'd-ui';";

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: dialogArgTypes,
  parameters: {
    controls: {
      include: ['size', 'alert', 'dismissible', 'processing', 'bordered', 'radius'],
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

export const ConfirmDialog: Story = {
  name: 'Confirmation',
  args: closed,
  parameters: componentSource(
    importAlertDialog,
    `<AlertDialog
    open={open}
    onOpenChange={setOpen}
    title="Confirmer l'action"
    cancelLabel="Refuser"
    confirmLabel="Accepter"
>
    Cette opération modifiera définitivement vos préférences. Voulez-vous continuer ?
</AlertDialog>`,
  ),
  render: (_, { globals }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return (
      <Trigger copy={copy} label={copy.confirmOpen}>
        {(open, setOpen) => (
          <AlertDialog
            open={open}
            onOpenChange={setOpen}
            title={copy.confirmTitle}
            cancelLabel={copy.disagree}
            confirmLabel={copy.agree}
          >
            {copy.confirmBody}
          </AlertDialog>
        )}
      </Trigger>
    );
  },
};

function AlertKindsDemo({ copy }: { copy: DialogDocsCopy }) {
  const [kind, setKind] = useState<AlertDialogKind | null>(null);
  const kinds: { kind: AlertDialogKind; label: string }[] = [
    { kind: 'warning', label: copy.warning },
    { kind: 'error', label: copy.error },
    { kind: 'success', label: copy.success },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-3 p-6">
      {kinds.map(({ kind: value, label }) => (
        <Button key={value} variant="secondary" onClick={() => setKind(value)}>
          {label}
        </Button>
      ))}
      <AlertDialog
        open={kind !== null}
        onOpenChange={(next) => setKind(next ? kind : null)}
        kind={kind ?? undefined}
        title={copy.alertTitle}
        confirmLabel={copy.ok}
      >
        {copy.alertBody}
      </AlertDialog>
    </div>
  );
}

export const AlertKinds: Story = {
  name: 'Alerte par variante',
  args: closed,
  parameters: componentSource(
    importAlertDialog,
    `<AlertDialog
    open={open}
    onOpenChange={setOpen}
    kind="warning"
    title="Alerte"
    confirmLabel="OK"
>
    Un événement important requiert votre attention.
</AlertDialog>`,
  ),
  render: (_, { globals }) => (
    <AlertKindsDemo copy={dialogCopy(docsLocale(globals.locale))} />
  ),
};

export const TintedFooter: Story = {
  name: 'Pied de page fixe',
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
    `<Dialog open={open} onOpenChange={setOpen} size="tiny">
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
          <Dialog open={open} onOpenChange={setOpen} size="tiny">
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
    `<Dialog open={open} onOpenChange={setOpen} size="tiny">
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
          <Dialog open={open} onOpenChange={setOpen} size="tiny">
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

const SIZES: { size: DialogSize; labelKey: keyof DialogDocsCopy }[] = [
  { size: 'tiny', labelKey: 'tiny' },
  { size: 'regular', labelKey: 'regular' },
  { size: 'big', labelKey: 'big' },
  { size: 'huge', labelKey: 'huge' },
];

function SizesDemo({ copy }: { copy: DialogDocsCopy }) {
  const [size, setSize] = useState<DialogSize | null>(null);
  return (
    <div className="flex flex-wrap justify-center gap-3 p-6">
      {SIZES.map(({ size: value, labelKey }) => (
        <Button key={value} variant="secondary" onClick={() => setSize(value)}>
          {copy[labelKey]}
        </Button>
      ))}
      <Dialog
        open={size !== null}
        onOpenChange={(next) => setSize(next ? size : null)}
        size={size ?? 'regular'}
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
    `<Dialog open={open} onOpenChange={setOpen} size="big">
    <DialogTitle>Largeur du panneau</DialogTitle>
    <DialogDescription>
        Sous le point de rupture sm, toutes les tailles occupent la largeur disponible.
    </DialogDescription>
</Dialog>`,
  ),
  render: (_, { globals }) => <SizesDemo copy={dialogCopy(docsLocale(globals.locale))} />,
};

function ProcessingDemo({ copy }: { copy: DialogDocsCopy }) {
  const [open, setOpen] = useState(false);
  const [processing, setProcessing] = useState(false);

  return (
    <div className="flex justify-center p-6">
      <Button variant="secondary" onClick={() => setOpen(true)}>
        {copy.processingOpen}
      </Button>
      <Dialog
        open={open}
        onOpenChange={(next) => {
          if (!processing) setOpen(next);
        }}
        processing={processing}
      >
        <DialogTitle>{copy.processingTitle}</DialogTitle>
        <DialogDescription>{copy.processingBody}</DialogDescription>
        <DialogActions>
          <Button
            variant="secondary"
            disabled={processing}
            onClick={() => setOpen(false)}
          >
            {copy.cancel}
          </Button>
          <Button
            variant="primary"
            loading={processing}
            onClick={() => {
              setProcessing(true);
              window.setTimeout(() => {
                setProcessing(false);
                setOpen(false);
              }, 2000);
            }}
          >
            {copy.save}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export const Processing: Story = {
  name: 'Traitement en cours',
  args: closed,
  parameters: componentSource(
    importDialog,
    `const [processing, setProcessing] = useState(false);

<Dialog open={open} onOpenChange={setOpen} processing={processing}>
    <DialogTitle>Enregistrement en cours</DialogTitle>
    <DialogDescription>Vos modifications sont en cours d'enregistrement.</DialogDescription>
    <DialogActions>
        <Button variant="secondary" onClick={() => setOpen(false)} disabled={processing}>
            Annuler
        </Button>
        <Button
            variant="primary"
            loading={processing}
            onClick={() => {
                setProcessing(true);
                setTimeout(() => {
                    setProcessing(false);
                    setOpen(false);
                }, 2000);
            }}
        >
            Enregistrer
        </Button>
    </DialogActions>
</Dialog>`,
  ),
  render: (_, { globals }) => (
    <ProcessingDemo copy={dialogCopy(docsLocale(globals.locale))} />
  ),
};

export const PanelChrome: Story = {
  name: 'Bordure et coins',
  args: closed,
  parameters: componentSource(
    importDialog,
    `<Dialog open={open} onOpenChange={setOpen} bordered radius="xl">
    <DialogTitle>Apparence du panneau</DialogTitle>
    <DialogDescription>
        La bordure et l'arrondi peuvent être ajustés selon le contexte visuel.
    </DialogDescription>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Annuler</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Continuer</Button>
    </DialogActions>
</Dialog>`,
  ),
  render: (_, { globals }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return (
      <Trigger copy={copy} label={copy.panelChromeOpen}>
        {(open, setOpen) => (
          <Dialog open={open} onOpenChange={setOpen} bordered radius="xl">
            <DialogTitle>{copy.panelChromeTitle}</DialogTitle>
            <DialogDescription>{copy.panelChromeBody}</DialogDescription>
            <DialogActions surface>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.cancel}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.continue}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Trigger>
    );
  },
};

export const Scrollable: Story = {
  name: 'Contenu défilant',
  args: closed,
  parameters: componentSource(
    importDialog,
    `<Dialog open={open} onOpenChange={setOpen} size="big">
    <DialogHeader>
        <DialogTitle>Conditions d'utilisation</DialogTitle>
    </DialogHeader>
    <DialogBody>
        <p>{longText}</p>
    </DialogBody>
    <DialogActions surface>
        <Button variant="secondary" onClick={() => setOpen(false)}>Refuser</Button>
        <Button variant="primary" onClick={() => setOpen(false)}>Accepter</Button>
    </DialogActions>
</Dialog>`,
  ),
  render: (_, { globals }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    const paragraphs = Array.from({ length: 8 }, () => copy.scrollParagraph);
    return (
      <Trigger copy={copy} label={copy.scrollOpen}>
        {(open, setOpen) => (
          <Dialog open={open} onOpenChange={setOpen} size="big">
            <DialogHeader>
              <DialogTitle className="pe-0">{copy.scrollTitle}</DialogTitle>
            </DialogHeader>
            <DialogBody className="space-y-4">
              {paragraphs.map((text, index) => (
                <p key={index} className="text-fg-muted text-sm">
                  {text}
                </p>
              ))}
            </DialogBody>
            <DialogActions surface>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                {copy.disagree}
              </Button>
              <Button variant="primary" onClick={() => setOpen(false)}>
                {copy.agree}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Trigger>
    );
  },
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
    <DialogActions>
        <Button variant="primary" onClick={() => setOpen(false)}>Fermer</Button>
    </DialogActions>
</Dialog>`,
  ),
  render: (_, { globals }) => {
    const copy = dialogCopy(docsLocale(globals.locale));
    return (
      <Trigger copy={copy}>
        {(open, setOpen) => (
          <Dialog open={open} onOpenChange={setOpen}>
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
    `<Dialog open={open} onOpenChange={setOpen}>
    <DialogTitle>Inviter un membre</DialogTitle>
    <DialogBody>
        <form id="invite" onSubmit={onSubmit} className="grid gap-4">
            <TextInput type="email" name="email" label="Adresse e-mail" required />
            <Select name="role" label="Rôle" options={roles} defaultValue="editor" />
        </form>
    </DialogBody>
    <DialogActions surface>
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
          <Dialog open={open} onOpenChange={setOpen}>
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
