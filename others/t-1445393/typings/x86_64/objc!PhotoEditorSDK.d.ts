
declare class PESDK extends IMGLY {

	static alloc(): PESDK; // inherited from NSObject

	static new(): PESDK; // inherited from NSObject
}

declare const enum PESDKImageFileFormat {

	Jpeg = 0,

	Png = 1,

	Heif = 2,

	Tiff = 3
}

declare class PESDKPhoto extends NSObject implements PESDKPhotoRepresentation {

	static alloc(): PESDKPhoto; // inherited from NSObject

	static new(): PESDKPhoto; // inherited from NSObject

	static photoFromPhotoRepresentation(photoRepresentation: PESDKPhotoRepresentation): PESDKPhoto;

	readonly data: NSData; // inherited from PESDKPhotoRepresentation

	readonly image: UIImage; // inherited from PESDKPhotoRepresentation

	readonly size: CGSize; // inherited from PESDKPhotoRepresentation

	readonly uiImage: UIImage; // inherited from PESDKPhotoRepresentation

	readonly url: NSURL; // inherited from PESDKPhotoRepresentation

	constructor(o: { data: NSData; }); // inherited from PESDKPhotoRepresentation

	constructor(o: { image: UIImage; });

	constructor(o: { URL: NSURL; }); // inherited from PESDKPhotoRepresentation

	initWithData(data: NSData): this;

	initWithImage(image: UIImage): this;

	initWithURL(url: NSURL): this;
}

declare class PESDKPhotoEditPreviewController extends PESDKMediaEditPreviewController {

	static alloc(): PESDKPhotoEditPreviewController; // inherited from NSObject

	static new(): PESDKPhotoEditPreviewController; // inherited from NSObject

	readonly photo: PESDKPhoto;

	constructor(o: { photoAsset: PESDKPhoto; photoEditModel: PESDKPhotoEditModel; });

	initWithPhotoAssetPhotoEditModel(photoAsset: PESDKPhoto, photoEditModel: PESDKPhotoEditModel): this;
}

declare class PESDKPhotoEditViewController extends PESDKMediaEditViewController {

	static alloc(): PESDKPhotoEditViewController; // inherited from NSObject

	static new(): PESDKPhotoEditViewController; // inherited from NSObject

	delegate: PESDKPhotoEditViewControllerDelegate;

	constructor(o: { photoAsset: PESDKPhoto; configuration: PESDKConfiguration; });

	constructor(o: { photoAsset: PESDKPhoto; configuration: PESDKConfiguration; photoEditModel: PESDKPhotoEditModel; });

	initWithPhotoAssetConfiguration(photoAsset: PESDKPhoto, configuration: PESDKConfiguration): this;

	initWithPhotoAssetConfigurationPhotoEditModel(photoAsset: PESDKPhoto, configuration: PESDKConfiguration, photoEditModel: PESDKPhotoEditModel): this;

	serializedSettingsWithImageData(includeImageData: boolean): NSData;
}

interface PESDKPhotoEditViewControllerDelegate extends PESDKMediaEditViewControllerDelegate {

	photoEditViewControllerDidCancel(photoEditViewController: PESDKPhotoEditViewController): void;

	photoEditViewControllerDidFailToGeneratePhoto(photoEditViewController: PESDKPhotoEditViewController): void;

	photoEditViewControllerDidSaveImageImageAsData(photoEditViewController: PESDKPhotoEditViewController, image: UIImage, data: NSData): void;
}
declare var PESDKPhotoEditViewControllerDelegate: {

	prototype: PESDKPhotoEditViewControllerDelegate;
};

declare class PESDKPhotoEditViewControllerOptions extends PESDKMediaEditViewControllerOptions {

	static alloc(): PESDKPhotoEditViewControllerOptions; // inherited from NSObject

	static new(): PESDKPhotoEditViewControllerOptions; // inherited from NSObject

	readonly compressionQuality: number;

	readonly outputImageFileFormat: PESDKImageFileFormat;

	readonly outputImageFileFormatUTI: string;

	constructor(o: { photoEditBuilder: PESDKPhotoEditViewControllerOptionsBuilder; });

	initWithPhotoEditBuilder(photoEditBuilder: PESDKPhotoEditViewControllerOptionsBuilder): this;
}

declare class PESDKPhotoEditViewControllerOptionsBuilder extends PESDKMediaEditViewControllerOptionsBuilder {

	static alloc(): PESDKPhotoEditViewControllerOptionsBuilder; // inherited from NSObject

	static new(): PESDKPhotoEditViewControllerOptionsBuilder; // inherited from NSObject

	compressionQuality: number;

	outputImageFileFormat: PESDKImageFileFormat;
}

declare var PhotoEditorSDKVersionNumber: number;

declare var PhotoEditorSDKVersionString: interop.Reference<number>;
