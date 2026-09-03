export interface SidebarLink {
  type: 'link';
  label: string;
  href: string;
  isCurrent: boolean;
  badge?: unknown;
  attrs?: Record<string, string | number | boolean | undefined>;
}

export interface SidebarGroup {
  type: 'group';
  label: string;
  entries: SidebarEntry[];
  collapsed: boolean;
  badge?: unknown;
}

export type SidebarEntry = SidebarLink | SidebarGroup;

function entryHasCurrent(entry: SidebarEntry): boolean {
  if (entry.type === 'link') return !!entry.isCurrent;
  return entry.entries.some(entryHasCurrent);
}

export const moduleIcons: Record<string, string> = {
  'produtos': 'package',
  'clientes': 'users',
  'custos': 'dollar-sign',
  'pedidos': 'shopping-bag',
  'producao': 'factory',
  'expedicao': 'truck',
  'compras': 'shopping-cart',
  'recebimento': 'inbox',
  'pessoas': 'user',
  'marketplace': 'globe',
  'indicadores': 'bar-chart-2',
  'arquivos': 'folder',
  'extras': 'settings',
};

export const groupIcons: Record<string, string> = {
  'inicio': 'home',
  'início': 'home',
  'primeiros passos': 'play-circle',
  'modulos': 'grid',
  'módulos': 'grid',
  'fluxos de trabalho': 'git-branch',
  'integrações': 'plug',
  'integracoes': 'plug',
  'ajuda': 'life-buoy',
  'referências': 'book-open',
  'referencias': 'book-open',
};

export function getIconForItem(entry: SidebarEntry, groupLabel: string): string {
  const href = entry.type === 'link' ? entry.href : '';

  for (const [key, icon] of Object.entries(moduleIcons)) {
    if (href.includes(key)) return icon;
  }

  if (entry.type === 'group') {
    const label = entry.label.toLowerCase();
    for (const [key, icon] of Object.entries(groupIcons)) {
      if (label.includes(key)) return icon;
    }
    // Fallback: usa o icone do grupo pai quando for subgrupo (ex: Expedicao, NF-e)
    const parent = groupLabel.toLowerCase();
    for (const [key, icon] of Object.entries(moduleIcons)) {
      if (parent.includes(key)) return icon;
    }
  }

  return 'file-text';
}

export function isGroupExpanded(group: SidebarGroup): boolean {
  if (entryHasCurrent(group)) return true;
  return !group.collapsed;
}

export function isEntryExpanded(entry: SidebarEntry): boolean {
  if (entry.type !== 'group') return false;
  if (entryHasCurrent(entry)) return true;
  return !entry.collapsed;
}

export const iconMap: Record<string, string> = {
  'package': '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/><polyline points="3.27 17.04 12 12.01 20.73 17.04"/>',
  'users': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'dollar-sign': '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  'shopping-bag': '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  'factory': '<path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/><path d="M2 20h20"/><path d="M20 10h-2"/><path d="M14 4h-2"/><path d="M8 14h-2"/>',
  'truck': '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14"/><circle cx="17" cy="18" r="2"/><circle cx="5" cy="18" r="2"/>',
  'shopping-cart': '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
  'inbox': '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'globe': '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  'bar-chart-2': '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  'folder': '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><line x1="2" y1="9" x2="22" y2="9"/>',
  'settings': '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  'home': '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  'play-circle': '<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16"/>',
  'grid': '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  'git-branch': '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  'plug': '<path d="M12 2v2"/><path d="M17 7h-10"/><path d="M10 7v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7"/><path d="M14 7v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V7"/>',
  'life-buoy': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>',
  'book-open': '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><line x1="2" y1="9" x2="22" y2="9"/>',
  'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
  'chevron-left': '<polyline points="15 18 9 12 15 6"/>',
  'menu': '<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>',
  'search': '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  'headphones': '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
  'external-link': '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
  'folder-open': '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
};

export function getIcon(iconName: string): string {
  const path = iconMap[iconName] || iconMap['file-text'];
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-svg">${path}</svg>`;
}

function slugify(label: string): string {
  return label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function renderItem(entry: SidebarEntry, groupLabel: string, depth = 0): string {
  const icon = getIconForItem(entry, groupLabel);
  const indent = depth * 16;

  if (entry.type === 'link') {
    const active = !!entry.isCurrent;
    return `
      <a
        href="${entry.href}"
        class="sidebar-item ${active ? 'active' : ''} depth-${depth}"
        style="--indent: ${indent}px;"
        data-label="${entry.label}"
        ${active ? 'aria-current="page"' : ''}
      >
        <span class="item-icon" aria-hidden="true">${getIcon(icon)}</span>
        <span class="item-label">${entry.label}</span>
        ${active ? '<span class="active-indicator" aria-hidden="true"></span>' : ''}
      </a>
    `;
  }

  const expanded = isEntryExpanded(entry);
  const active = entryHasCurrent(entry);
  const childrenHtml = entry.entries.map((child) => renderItem(child, groupLabel, depth + 1)).join('');
  const groupId = `group-${slugify(entry.label)}-${depth}`;

  return `
    <div class="sidebar-group depth-${depth}" style="--indent: ${indent}px;">
      <button
        class="sidebar-group-toggle ${expanded ? 'expanded' : ''} ${active ? 'active' : ''}"
        data-group="${entry.label}"
        data-label="${entry.label}"
        aria-expanded="${expanded}"
        aria-controls="${groupId}"
      >
        <span class="group-icon" aria-hidden="true">${getIcon(icon)}</span>
        <span class="group-label">${entry.label}</span>
        <span class="chevron" aria-hidden="true">${getIcon('chevron-right')}</span>
        ${active ? '<span class="active-indicator" aria-hidden="true"></span>' : ''}
      </button>
      <div
        id="${groupId}"
        class="sidebar-group-content ${expanded ? 'open' : ''}"
        role="region"
        aria-label="${entry.label}"
      >
        ${childrenHtml}
      </div>
    </div>
  `;
}

export function renderGroup(group: SidebarGroup): string {
  const expanded = isGroupExpanded(group);
  const groupLabel = group.label.toLowerCase();
  const icon = groupIcons[groupLabel] || 'folder';
  const itemsHtml = group.entries.map((entry) => renderItem(entry, group.label, 0)).join('');

  return `
    <section class="sidebar-section" aria-labelledby="section-${slugify(group.label)}">
      <div class="section-header">
        <span class="section-icon" aria-hidden="true">${getIcon(icon)}</span>
        <h2 id="section-${slugify(group.label)}" class="section-title">${group.label}</h2>
      </div>
      <div class="section-content ${expanded ? 'open' : ''}" data-section="${groupLabel}">
        ${itemsHtml}
      </div>
    </section>
  `;
}
