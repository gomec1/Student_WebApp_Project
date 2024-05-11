import type { Schema, Attribute } from '@strapi/strapi';

export interface GalleryGallery extends Schema.Component {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    Gallery: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'gallery.gallery': GalleryGallery;
    }
  }
}
