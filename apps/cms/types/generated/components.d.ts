import type { Schema, Struct } from '@strapi/strapi';

export interface RepeatableAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_repeatable_advantages';
  info: {
    displayName: 'Advantages';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface RepeatableFaq extends Struct.ComponentSchema {
  collectionName: 'components_repeatable_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'repeatable.advantages': RepeatableAdvantages;
      'repeatable.faq': RepeatableFaq;
    }
  }
}
