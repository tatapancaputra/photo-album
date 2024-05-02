// Getting a resource
export async function GET<T>(url: string): Promise<T> {
  return (
    await fetch(url, {
      next: { revalidate: +process.env.CACHE_LIFETIME! },
    })
  ).json();
}

// Creating a resource
export async function POST<T, Payload>(url: string, data: Payload): Promise<T> {
  return (
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(data),
    })
  ).json();
}

// Updating a resource
export async function PUT<T, Payload>(url: string, data: Payload): Promise<T> {
  return (
    await fetch(url, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(data),
    })
  ).json();
}

// Patching a resource
export async function PATCH<T, Payload>(
  url: string,
  data: Payload
): Promise<T> {
  return (
    await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(data),
    })
  ).json();
}

// Deleting a resource
export async function DELETE(url: string): Promise<Response> {
  return fetch(url, { method: 'DELETE' });
}
