const commonPersonalDomains = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.uk', 'yahoo.co.in', 'ymail.com',
  'outlook.com', 'hotmail.com', 'hotmail.co.uk', 'live.com', 'msn.com', 'icloud.com',
  'me.com', 'mac.com', 'aol.com', 'proton.me', 'protonmail.com', 'pm.me', 'mail.com',
  'gmx.com', 'gmx.de', 'gmx.net', 'fastmail.com', 'rediffmail.com', 'mailinator.com',
  'yopmail.com', 'guerrillamail.com', 'qq.com', '163.com', '126.com', 'naver.com',
  'daum.net', 'hanmail.net', 'yahoo.co.jp', 'yandex.com', 'yandex.ru', 'tuta.com',
]);

export function emailDomain(email: string): string {
  const parts = email.trim().split('@');
  if (parts.length !== 2) return '';
  const domain = parts[1].toLowerCase();
  if (!domain || /[\s/\\:#?%\[\]]/.test(domain) || domain.endsWith('.')) return '';
  try {
    const normalized = new URL(`https://${domain}`).hostname;
    const labels = normalized.split('.');
    return normalized.length <= 253 && labels.length >= 2 && labels.every(label => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(label)) ? normalized : '';
  } catch { return ''; }
}

export function isBlockedDomain(domain: string, domains: ReadonlySet<string>): boolean {
  const labels = domain.split('.');
  return labels.some((_, index) => domains.has(labels.slice(index).join('.')));
}

export function isCommonPersonalEmail(email: string): boolean {
  return isBlockedDomain(emailDomain(email), commonPersonalDomains);
}

export const workEmailMessage = 'Please use your organisation\'s work email address. Personal and temporary email addresses are not accepted for sample requests.';
