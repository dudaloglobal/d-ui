import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { skeletonArgTypes } from '../../../.storybook/arg-types';
import { docsLocale, loadingCopy } from '../../../.storybook/docs-locale';
import { componentSource } from '../../../.storybook/docs-source';
import { Skeleton, SkeletonText } from './Skeleton';

const importSkeleton = "import { Skeleton, SkeletonText } from 'd-ui';";

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: skeletonArgTypes,
  parameters: { controls: { include: ['shape', 'width', 'height', 'size'] } },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Toutes les stories partagent la même coquille : un conteneur `aria-busy` qui
 * porte l'information que les blocs, eux, ne portent pas.
 */
function Loading({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex justify-center p-6">
      <div aria-busy="true" aria-label={label} className="w-80">
        {children}
      </div>
    </div>
  );
}

export const Default: Story = {
  name: 'Par défaut',
  parameters: componentSource(importSkeleton, `<Skeleton height={16} />`),
  render: (args, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <Loading label={copy.loading}>
        <Skeleton {...args} height={args.height ?? 16} />
      </Loading>
    );
  },
};

export const Media: Story = {
  name: 'Image et vidéo',
  parameters: componentSource(
    importSkeleton,
    `<>
    <Skeleton height={160} />
    <Skeleton height={160} className="aspect-video h-auto" />
</>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <Loading label={copy.loading}>
        <div className="flex flex-col gap-4">
          <Skeleton height={140} />
          <div className="relative">
            <Skeleton className="aspect-video h-auto" />
            <span
              aria-hidden="true"
              className="border-fg/20 absolute inset-0 m-auto grid size-12 place-items-center rounded-full border-2"
            >
              <span className="border-y-transparent border-l-fg/20 ms-1 border-y-6 border-l-10" />
            </span>
          </div>
        </div>
      </Loading>
    );
  },
};

export const TextBlock: Story = {
  name: 'Paragraphe',
  parameters: componentSource(importSkeleton, `<SkeletonText lines={4} />`),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <Loading label={copy.loading}>
        <SkeletonText lines={4} />
      </Loading>
    );
  },
};

export const Card: Story = {
  name: 'Carte',
  parameters: componentSource(
    importSkeleton,
    `<div className="rounded-lg border p-4" aria-busy="true">
    <Skeleton height={120} />
    <Skeleton shape="text" width="45%" className="mt-4" />
    <SkeletonText lines={2} className="mt-3" />
</div>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <Loading label={copy.loading}>
        <div className="border-border rounded-lg border p-4">
          <Skeleton height={120} />
          <Skeleton shape="text" width="45%" className="mt-4" />
          <SkeletonText lines={2} className="mt-3" />
        </div>
      </Loading>
    );
  },
};

export const Widget: Story = {
  name: 'Widget',
  parameters: componentSource(
    importSkeleton,
    `<div className="rounded-lg border p-4" aria-busy="true">
    <Skeleton shape="text" width="40%" />
    <Skeleton height={72} className="mt-4" />
</div>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <Loading label={copy.loading}>
        <div className="border-border rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <Skeleton shape="text" width="40%" />
            <Skeleton shape="circle" size={24} />
          </div>
          <div className="mt-4 flex items-end gap-2">
            {[40, 68, 32, 80, 56, 72].map((height, index) => (
              <Skeleton key={index} height={height} width="100%" />
            ))}
          </div>
        </div>
      </Loading>
    );
  },
};

export const List: Story = {
  name: 'Liste',
  parameters: componentSource(
    importSkeleton,
    `<div className="flex items-center gap-3" aria-busy="true">
    <Skeleton shape="circle" size={40} />
    <div className="flex-1">
        <Skeleton shape="text" width="35%" />
        <Skeleton shape="text" width="60%" className="mt-2" />
    </div>
</div>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <Loading label={copy.loading}>
        <div className="flex flex-col gap-4">
          {[0, 1, 2, 3].map((row) => (
            <div key={row} className="flex items-center gap-3">
              <Skeleton shape="circle" size={40} />
              <div className="min-w-0 flex-1">
                <Skeleton shape="text" width="35%" />
                <Skeleton shape="text" width="60%" className="mt-2" />
              </div>
            </div>
          ))}
        </div>
      </Loading>
    );
  },
};

export const Testimonial: Story = {
  name: 'Témoignage',
  parameters: componentSource(
    importSkeleton,
    `<div aria-busy="true">
    <SkeletonText lines={3} />
    <div className="mt-6 flex items-center gap-3">
        <Skeleton shape="circle" size={44} />
        <div className="flex-1">
            <Skeleton shape="text" width="40%" />
            <Skeleton shape="text" width="55%" className="mt-2" />
        </div>
    </div>
</div>`,
  ),
  render: (_, { globals }) => {
    const copy = loadingCopy(docsLocale(globals.locale));
    return (
      <Loading label={copy.loading}>
        <SkeletonText lines={3} lastLineWidth="70%" />
        <div className="mt-6 flex items-center gap-3">
          <Skeleton shape="circle" size={44} />
          <div className="min-w-0 flex-1">
            <Skeleton shape="text" width="40%" />
            <Skeleton shape="text" width="55%" className="mt-2" />
          </div>
        </div>
      </Loading>
    );
  },
};
