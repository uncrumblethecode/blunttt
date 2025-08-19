import { createWorkflow } from "@medusajs/framework/workflows-sdk";
import {
  sendNotificationsStep,
  useQueryGraphStep,
} from "@medusajs/medusa/core-flows";

type WorkflowInput = {
  id: string;
};

export const sendEmailWorkflow = createWorkflow(
  "send-email-workflow",
  ({ id }: WorkflowInput) => {
    const { data: products } = useQueryGraphStep({
      entity: "product",
      fields: ["*", "variants.*"],
      filters: { id },
    });

    const product = products?.[0];

    if (product) {
      sendNotificationsStep({
        to: "oveskhan890@gmail.com",
        channel: "email",
        template: "product-created",
        data: {
          product_title: product.title,
          product_image: product.images?.[0]?.url ?? "",
        },
      } as any);
    }
  }
);
