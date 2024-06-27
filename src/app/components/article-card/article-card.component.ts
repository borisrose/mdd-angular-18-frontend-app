import { Component, Input, input } from '@angular/core';
import ArticleInterface from '../../interfaces/article-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  @Input() article!:ArticleInterface;
}
