import { RichText } from 'prismic-dom'

export function getProjectByNode(node: any) {
  return {
    title: node?.title,
    description: RichText.asText(node?.description),
    liveurl: node?.liveurl,
    giturl: node?.giturl,
    color: node?.color,
    uid: node._meta?.uid,
    banner: node.banner?.vertical
      ? {
          vertical: true,
          url: node.banner?.vertical?.url,
          alt: node.banner?.vertical?.alt
        }
      : {
          vertical: false,
          url: node.banner?.url,
          alt: node.banner?.alt
        },
    images: node.images.map((image: any) =>
      image.image?.vertical
        ? {
            vertical: true,
            url: image.image?.vertical?.url,
            alt: image.image?.vertical?.alt
          }
        : {
            vertical: false,
            url: image.image?.url,
            alt: image.image?.alt
          }
    )
  }
}
