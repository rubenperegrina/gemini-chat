import { Component, inject } from '@angular/core';
import { GeminiService } from './services/gemini.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      ::ng-deep nb-layout-column {
        justify-content: center;
        display: flex;
      }
      nb-card {
        background-color: unset;
        border: unset;
      }
    `,
  ],
})
export class AppComponent {

  geminiService = inject(GeminiService);

  isLoading = false;
  messages: any[] = [
    {
      text: 'Hi! I\'m Gemini, Angular and TypeScript expert, how can i help you?',
      date: new Date(),
      reply: false,
      user: {
        name: 'Gemini',
        avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    },
  ];

  async sendMessage(event: any) {
    this.isLoading = true;
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: 'text',
      user: {
        name: 'Rubén Peregrina',
        avatar: 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png',
      },
    });

    const botReply = await this.geminiService.generate(event.message);
    
    this.messages.push(    {
      text: botReply,
      date: new Date(),
      reply: false,
      user: {
        name: 'Gemini',
        avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
      },
    },
    );
    this.isLoading = false;
  }
}
