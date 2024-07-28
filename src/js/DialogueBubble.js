import { createImage } from './createImage';

export class DialogueBubble {
  constructor(imageSrc, x, y, context) {
    this.context = context;
    this.image = createImage(imageSrc);
    this.x = x;
    this.y = y;
    this.width = 280;
    this.height = 180;
    this.padding = 10;
    this.horizontalPadding = 26;
    this.messageText = "";
    this.messageIndex = 0;
    this.messageVisible = false;
    this.typingSpeed = 50;
  }

  showMessage(text) {
    this.messageText = text;
    this.messageIndex = 0;
    this.messageVisible = true;
    this.typeMessage();
  }

  typeMessage() {
    if (this.messageIndex < this.messageText.length) {
      this.messageIndex++;
      setTimeout(() => this.typeMessage(), this.typingSpeed);
    }
  }

  draw() {
    if (this.messageVisible) {
      this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
      this.context.fillStyle = "#1d6c7a";
      this.context.font = "18px PatrickHand";
      this.wrapText(
        this.messageText.slice(0, this.messageIndex),
        this.x + this.horizontalPadding,
        this.y + this.padding,
        this.width - this.horizontalPadding * 2,
        20
      );
    }
  }

  wrapText(text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let lines = [];
    let testLine = '';
    let metrics = null;
    let testWidth = 0;

    for (let i = 0; i < words.length; i++) {
      testLine = line + words[i] + ' ';
      metrics = this.context.measureText(testLine);
      testWidth = metrics.width;
      if (testWidth > maxWidth && i > 0) {
        lines.push(line);
        line = words[i] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line);

    const totalHeight = lines.length * lineHeight;
    let offsetY = y + (this.height - totalHeight) / 2 + lineHeight;

    for (let i = 0; i < lines.length; i++) {
      this.context.fillText(lines[i], x, offsetY);
      offsetY += lineHeight;
    }
  }
}
