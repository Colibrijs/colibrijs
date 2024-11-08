export async function sendTelegramRequest(url: string, params: URLSearchParams): Promise<void> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });
    const body = await response.json();
    if (!body.ok) {
      throw new Error(body.description);
    }
  } catch (error) {
    throw new Error(`При отправке сообщения в телеграм, возникла ошибка ${String(error)}`);
  }
}
