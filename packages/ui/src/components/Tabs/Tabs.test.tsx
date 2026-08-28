import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import {
  Tab as TabFromEntry,
  TabList as TabListFromEntry,
  TabPanel as TabPanelFromEntry,
  Tabs as TabsFromEntry,
} from '../../index';
import { Tab, TabList, TabPanel, Tabs } from './Tabs';

function CourseTabs({
  activation = 'automatic' as const,
  orientation = 'horizontal' as const,
  disabled = false,
  onValueChange,
}: {
  activation?: 'automatic' | 'manual';
  orientation?: 'horizontal' | 'vertical';
  disabled?: boolean;
  onValueChange?: (value: string) => void;
}) {
  return (
    <Tabs
      label="Section du cours"
      defaultValue="overview"
      activation={activation}
      orientation={orientation}
      disabled={disabled}
      onValueChange={onValueChange}
    >
      <TabList>
        <Tab value="overview">Aperçu</Tab>
        <Tab value="homework">Devoirs</Tab>
        <Tab value="grades" disabled>
          Notes
        </Tab>
      </TabList>
      <TabPanel value="overview">Présentation</TabPanel>
      <TabPanel value="homework">Liste des devoirs</TabPanel>
      <TabPanel value="grades">Notes masquées</TabPanel>
    </Tabs>
  );
}

describe('Tabs', () => {
  it('is exported from the package entrypoint', () => {
    expect(TabsFromEntry).toBe(Tabs);
    expect(TabListFromEntry).toBe(TabList);
    expect(TabFromEntry).toBe(Tab);
    expect(TabPanelFromEntry).toBe(TabPanel);
  });

  it('follows the WAI-ARIA tabs pattern', () => {
    render(<CourseTabs />);
    const tablist = screen.getByRole('tablist', { name: 'Section du cours' });
    expect(tablist).toHaveAttribute('aria-orientation', 'horizontal');
    const selected = screen.getByRole('tab', { name: 'Aperçu' });
    expect(selected).toHaveAttribute('aria-selected', 'true');
    expect(selected).toHaveAttribute('tabindex', '0');
    expect(screen.getByRole('tab', { name: 'Devoirs' })).toHaveAttribute(
      'aria-selected',
      'false',
    );
    expect(screen.getByRole('tab', { name: 'Devoirs' })).toHaveAttribute(
      'tabindex',
      '-1',
    );
    expect(screen.getByRole('tabpanel', { name: 'Aperçu' })).toHaveTextContent(
      'Présentation',
    );
    expect(screen.queryByText('Liste des devoirs')).not.toBeInTheDocument();
  });

  it('forwards a ref to the tab button', () => {
    const ref = createRef<HTMLButtonElement>();
    render(
      <Tabs label="Section" defaultValue="a">
        <TabList>
          <Tab value="a" ref={ref}>
            A
          </Tab>
        </TabList>
        <TabPanel value="a">Panel</TabPanel>
      </Tabs>,
    );
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toHaveAttribute('role', 'tab');
  });

  it('selects a tab on click and shows its panel', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<CourseTabs onValueChange={onValueChange} />);
    await user.click(screen.getByRole('tab', { name: 'Devoirs' }));
    expect(onValueChange).toHaveBeenCalledWith('homework');
    expect(screen.getByRole('tab', { name: 'Devoirs' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tabpanel', { name: 'Devoirs' })).toHaveTextContent(
      'Liste des devoirs',
    );
  });

  it('moves selection with arrows when activation is automatic', async () => {
    const user = userEvent.setup();
    render(<CourseTabs />);
    screen.getByRole('tab', { name: 'Aperçu' }).focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Devoirs' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tab', { name: 'Devoirs' })).toHaveFocus();
  });

  it('skips a disabled tab with the keyboard', async () => {
    const user = userEvent.setup();
    render(<CourseTabs />);
    screen.getByRole('tab', { name: 'Devoirs' }).focus();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Aperçu' })).toHaveFocus();
    expect(screen.getByRole('tab', { name: 'Notes' })).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  });

  it('only moves focus with arrows when activation is manual', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<CourseTabs activation="manual" onValueChange={onValueChange} />);
    screen.getByRole('tab', { name: 'Aperçu' }).focus();
    await user.keyboard('{ArrowRight}');
    expect(onValueChange).not.toHaveBeenCalled();
    expect(screen.getByRole('tab', { name: 'Aperçu' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tab', { name: 'Devoirs' })).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(onValueChange).toHaveBeenCalledWith('homework');
    expect(screen.getByRole('tab', { name: 'Devoirs' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });

  it('uses Home and End to jump to the first and last enabled tab', async () => {
    const user = userEvent.setup();
    render(
      <Tabs label="Section" defaultValue="overview">
        <TabList>
          <Tab value="overview">Aperçu</Tab>
          <Tab value="homework">Devoirs</Tab>
          <Tab value="files">Fichiers</Tab>
        </TabList>
        <TabPanel value="overview">1</TabPanel>
        <TabPanel value="homework">2</TabPanel>
        <TabPanel value="files">3</TabPanel>
      </Tabs>,
    );
    screen.getByRole('tab', { name: 'Aperçu' }).focus();
    await user.keyboard('{End}');
    expect(screen.getByRole('tab', { name: 'Fichiers' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    await user.keyboard('{Home}');
    expect(screen.getByRole('tab', { name: 'Aperçu' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });

  it('does not change selection when the group is disabled', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<CourseTabs disabled onValueChange={onValueChange} />);
    await user.click(screen.getByRole('tab', { name: 'Devoirs' }));
    expect(onValueChange).not.toHaveBeenCalled();
    expect(screen.getByRole('tab', { name: 'Aperçu' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });

  it('keeps the tabs pattern when variant is detached', async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <Tabs
        label="Type de produit"
        defaultValue="internal"
        variant="detached"
        onValueChange={onValueChange}
      >
        <TabList>
          <Tab value="internal">Logiciel interne</Tab>
          <Tab value="customer">Logiciel client</Tab>
        </TabList>
        <TabPanel value="internal">Outils internes</TabPanel>
        <TabPanel value="customer">Portails clients</TabPanel>
      </Tabs>,
    );
    const tablist = screen.getByRole('tablist', { name: 'Type de produit' });
    expect(tablist).toBeInTheDocument();
    expect(tablist.className).not.toMatch(/bg-surface-muted/);
    expect(screen.getByRole('tab', { name: 'Logiciel interne' }).className).toMatch(
      /border-fg/,
    );
    expect(screen.getByRole('tab', { name: 'Logiciel client' }).className).toMatch(
      /border-border-subtle/,
    );
    await user.click(screen.getByRole('tab', { name: 'Logiciel client' }));
    expect(onValueChange).toHaveBeenCalledWith('customer');
    expect(screen.getByRole('tabpanel', { name: 'Logiciel client' })).toHaveTextContent(
      'Portails clients',
    );
  });
});
