// Computed admin.tgshop.io URLs that already include UTM passthrough.
// Computed once at module load time from the current page URL.
// This is more reliable than mutating <a> href via setAttribute after render,
// because React re-renders (triggered by resize, lang change, etc.) would
// otherwise revert the mutation back to the static href in the JSX.

function getUtmSuffix(): string {
  if (typeof window === 'undefined') return '';
  const url = new URLSearchParams(window.location.search);
  const utm = new URLSearchParams();
  for (const [k, v] of url.entries()) {
    if (k.toLowerCase().startsWith('utm_')) utm.set(k, v);
  }
  const s = utm.toString();
  return s ? '?' + s : '';
}

const SUFFIX = getUtmSuffix();

export const CTA_HREF = 'https://admin.tgshop.io/sign-up' + SUFFIX;
export const SIGNIN_HREF = 'https://admin.tgshop.io/sign-in' + SUFFIX;
