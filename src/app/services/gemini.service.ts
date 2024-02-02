import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {

  prompt = 'You are an Angular and TypeScript expert, answer the questions providing the best examples including code'
  generativeAI = new GoogleGenerativeAI(environment.gemini_key);
  model = this.generativeAI.getGenerativeModel({ model: 'gemini-pro' });

  async generate(textInput: string) {
    try {
      if (textInput) {
        const parts = [
          {
            text: this.prompt,
          },
          { text: textInput }
        ];

        const modelResult = await this.model.generateContent({
          contents: [{ role: 'user', parts }],
        });
        const response = modelResult.response;
        const text = response.text();
        return text;
      }
    } catch (e: any) {
      return '';
    }
    return '';
  }

}
