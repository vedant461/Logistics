export interface PaymentService {
  createCheckout(
    invoiceId: string,
    amount: number,
  ): Promise<{ status: "mock-ready"; invoiceId: string; amount: number }>;
}
export interface WhatsAppService {
  createPrefilledLink(message: string): string;
}
export interface EwayBillService {
  validateFormat(value: string): boolean;
  generateStub(): { status: "integration-stub"; message: string };
}
// MOCK: production adapters should be injected here for Razorpay/PayU, WhatsApp Business API and an e-way bill GSP.
export const mockPaymentService: PaymentService = {
  async createCheckout(invoiceId, amount) {
    return { status: "mock-ready", invoiceId, amount };
  },
};
export const mockWhatsAppService: WhatsAppService = {
  createPrefilledLink: (message) =>
    `https://wa.me/919845012340?text=${encodeURIComponent(message)}`,
};
export const mockEwayBillService: EwayBillService = {
  validateFormat: (value) => /^\d{12}$/.test(value),
  generateStub: () => ({
    status: "integration-stub",
    message: "Generation is ready for a GSP adapter.",
  }),
};
