'use server';
/**
 * @fileOverview An AI assistant that suggests suitable Welis Root Wood products and design ideas based on user's interior design preferences.
 *
 * - aiDesignStyleAssistant - A function that handles the AI design style assistance process.
 * - DesignStyleAssistantInput - The input type for the aiDesignStyleAssistant function.
 * - DesignStyleAssistantOutput - The return type for the aiDesignStyleAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DesignStyleAssistantInputSchema = z.object({
  designPreference: z
    .string()
    .describe('User\'s interior design style or preference (e.g., "modern rustic living room", "minimalist bedroom with natural touches").'),
});
export type DesignStyleAssistantInput = z.infer<typeof DesignStyleAssistantInputSchema>;

const DesignStyleAssistantOutputSchema = z.object({
  suggestedProducts: z.array(
    z.object({
      name: z.string().describe('The name of the suggested Welis Root Wood product.'),
      description: z
        .string()
        .describe('A brief description of the product, highlighting its relevance to the design style.'),
      category: z
        .string()
        .describe(
          'The category of the product (e.g., "Mobilya", "Dekorasyon", "İç Mekan Uygulamaları", "Dış Mekan Uygulamaları").'
        ),
      estimatedPrice: z.literal('0 TL').describe('Placeholder price for the product.'),
    })
  ),
  designIdeas: z
    .string()
    .describe(
      'Detailed design ideas and explanations on how the suggested products and other natural wood elements can be integrated into the space.'
    ),
});
export type DesignStyleAssistantOutput = z.infer<typeof DesignStyleAssistantOutputSchema>;

export async function aiDesignStyleAssistant(
  input: DesignStyleAssistantInput
): Promise<DesignStyleAssistantOutput> {
  return designStyleAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'designStyleAssistantPrompt',
  input: {schema: DesignStyleAssistantInputSchema},
  output: {schema: DesignStyleAssistantOutputSchema},
  prompt: `You are an AI-powered interior design assistant for "Welis Root Wood", a company specializing in natural wood decoration products, custom design furniture, and indoor/outdoor wood applications. Our slogan is "Doğadan Gelen Tasarım".

The user has described their interior design preference. Your task is to:
1. Suggest suitable "Welis Root Wood" products that fit this design style. For each product, provide a name, a brief description, a category (e.g., "Mobilya", "Dekorasyon", "İç Mekan Uygulamaları", "Dış Mekan Uygulamaları"), and set the \`estimatedPrice\` to "0 TL".
2. Provide detailed design ideas and explanations on how these products and other natural wood elements can be integrated into a space that matches the user's preference.

User's design preference: {{{designPreference}}}

Ensure the output is in Turkish as much as possible for product names and descriptions, and design ideas.`,
});

const designStyleAssistantFlow = ai.defineFlow(
  {
    name: 'designStyleAssistantFlow',
    inputSchema: DesignStyleAssistantInputSchema,
    outputSchema: DesignStyleAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
