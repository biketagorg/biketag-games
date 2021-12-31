import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Tag
 *
 *
 */
export interface Tag extends SanityDocument {
  _type: "tag";

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Tag — `string`
   *
   *
   */
  name?: string;

  /**
   * TagNumber — `number`
   *
   *
   */
  tagnumber?: number;

  /**
   * Mystery Image — `image`
   *
   *
   */
  mysteryImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Mystery Image URL — `string`
   *
   *
   */
  mysteryImageUrl?: string;

  /**
   * Game — `reference`
   *
   *
   */
  game?: SanityReference<Game>;

  /**
   * Mystery Player — `reference`
   *
   *
   */
  mysteryPlayer?: SanityReference<Player>;

  /**
   * Found Player — `reference`
   *
   *
   */
  foundPlayer?: SanityReference<Player>;

  /**
   * Hint — `string`
   *
   *
   */
  hint?: string;

  /**
   * Discussion URL — `string`
   *
   *
   */
  discussionUrl?: string;

  /**
   * Mention URL — `string`
   *
   *
   */
  mentionUrl?: string;

  /**
   * Mystery Time — `datetime`
   *
   *
   */
  mysteryTime?: string;

  /**
   * Found Time — `datetime`
   *
   *
   */
  foundTime?: string;

  /**
   * Found Image — `image`
   *
   *
   */
  foundImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Found Image URL — `string`
   *
   *
   */
  foundImageUrl?: string;

  /**
   * Found Location — `string`
   *
   *
   */
  foundLocation?: string;

  /**
   * GPS — `geopoint`
   *
   *
   */
  gps?: SanityGeoPoint;
}

/**
 * Player
 *
 *
 */
export interface Player extends SanityDocument {
  _type: "player";

  /**
   * UserID — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Bicon — `image`
   *
   *
   */
  bicon?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyedReference<Tag>>;

  /**
   * games — `array`
   *
   *
   */
  games?: Array<SanityKeyedReference<Game>>;

  /**
   * altNames — `array`
   *
   *
   */
  altNames?: Array<SanityKeyed<string>>;

  /**
   * devices — `array`
   *
   *
   */
  devices?: Array<SanityKeyed<string>>;
}

/**
 * Game
 *
 *
 */
export interface Game extends SanityDocument {
  _type: "game";

  /**
   * Game Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Game — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Region — `reference`
   *
   *
   */
  region?: SanityReference<Region>;

  /**
   * MainHash — `string`
   *
   *
   */
  mainhash?: string;

  /**
   * QueueHash — `string`
   *
   *
   */
  queuehash?: string;

  /**
   * SubReddit — `string`
   *
   *
   */
  subreddit?: string;

  /**
   * Boundary — `geopoint`
   *
   *
   */
  boundary?: SanityGeoPoint;

  /**
   * tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyedReference<Tag>>;

  /**
   * ambassadors — `array`
   *
   *
   */
  ambassadors?: Array<SanityKeyedReference<Ambassador>>;

  /**
   * settings — `array`
   *
   *
   */
  settings?: Array<SanityKeyedReference<Setting>>;

  /**
   * Logo — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Region
 *
 *
 */
export interface Region extends SanityDocument {
  _type: "region";

  /**
   * Region — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Region Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Region Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Region Zipcode — `string`
   *
   *
   */
  zipcode?: string;
}

/**
 * Ambassador
 *
 *
 */
export interface Ambassador extends SanityDocument {
  _type: "ambassador";

  /**
   * UserID — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Player Profile — `reference`
   *
   *
   */
  player?: SanityReference<Player>;

  /**
   * Email Address — `string`
   *
   *
   */
  email?: string;

  /**
   * Privacy — `boolean`
   *
   *
   */
  privacy?: boolean;

  /**
   * Address Line 1 — `string`
   *
   *
   */
  address1?: string;

  /**
   * Address Line 2 — `string`
   *
   *
   */
  address2?: string;

  /**
   * City — `string`
   *
   *
   */
  city?: string;

  /**
   * Country — `string`
   *
   *
   */
  country?: string;

  /**
   * Zipcode — `string`
   *
   *
   */
  zipcode?: string;

  /**
   * Phone Number — `string`
   *
   *
   */
  phone?: string;
}

/**
 * Setting
 *
 *
 */
export interface Setting extends SanityDocument {
  _type: "setting";

  /**
   * Setting — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Setting Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Setting Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Setting Key — `string`
   *
   *
   */
  key?: string;

  /**
   * Setting Value — `string`
   *
   *
   */
  value?: string;
}

export type RichText = Array<SanityKeyed<SanityBlock>>;

export type OpenGraph = {
  _type: "openGraph";
  /**
   * og:title — `string`
   *
   *
   */
  title?: string;

  /**
   * og:type — `string`
   *
   * 'website', or 'article' etc
   */
  type?: string;

  /**
   * og:image — `image`
   *
   * In your frontend you should make use of the asset URL
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type CaptionImage = {
  _type: "captionImage";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Attribution — `string`
   *
   *
   */
  Caption?: string;
};

export type Documents = Tag | Player | Game | Region | Ambassador | Setting;
