import { createClient, SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanityClient: SanityClient = createClient({
  projectId: "ewlslp6g",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const imageBuilder: ImageUrlBuilder = imageUrlBuilder(sanityClient);

export function getImageUrl(source: SanityImageSource) {
  return imageBuilder.image(source);
}
