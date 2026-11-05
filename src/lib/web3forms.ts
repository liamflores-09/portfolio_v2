export async function submitToWeb3Forms(formData: FormData): Promise<boolean> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });
    if (!response.ok) return false;

    const result = await response.json();
    return result?.success === true;
  } catch {
    return false;
  }
}
