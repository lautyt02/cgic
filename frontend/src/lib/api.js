export async function getContent() {
  try {
    const res = await fetch('/api/content');
    if (!res.ok) throw new Error('network');
    return await res.json();
  } catch {
    const info = await import('../data/info.json');
    const logos = await import('../data/logos.json');
    return { info: info.default, logos: logos.default };
  }
}

export async function postContact(data) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'error');
  }
  return res.json();
}
