export async function submitToWeb3Forms(formData: FormData): Promise<boolean> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    return response.ok;
  } catch {
    return false;
  }
}
