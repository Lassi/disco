export const imagePreviewWidth = '300px';

export const imageFullWidth = '843px';

export const buildImageSrc = (imageId: string, size: 'preview' | 'full') => (
  `https://www.artic.edu/iiif/2/${imageId}/full/${size === 'preview' ? 300 : 843},/0/default.jpg`
);
