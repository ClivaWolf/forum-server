import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateThemeDto {
    id: string;

    @IsNotEmpty()
    @IsString()
    name?: string;

    @IsNotEmpty()
    @IsString()
    colorLink?: string;

    @IsNotEmpty()
    @IsString()
    colorLinkActive?: string;

    @IsNotEmpty()
    @IsString()
    colorLinkHover?: string;

    @IsNotEmpty()
    @IsString()
    colorPrimary?: string;

    @IsNotEmpty()
    @IsString()
    colorPrimaryActive?: string;

    @IsNotEmpty()
    @IsString()
    colorPrimaryHover?: string;

    @IsNotEmpty()
    @IsString()
    colorPrimaryBg?: string;

    @IsNotEmpty()
    @IsString()
    colorPrimaryBorder?: string;

    @IsNotEmpty()
    @IsString()
    colorPrimaryBgHover?: string;

    @IsNotEmpty()
    @IsString()
    colorPrimaryBorderHover?: string;

    @IsNotEmpty()
    @IsString()
    colorPrimaryText?: string;

    @IsNotEmpty()
    @IsString()
    colorPrimaryTextActive?: string;

    @IsNotEmpty()
    @IsString()
    colorPrimaryTextHover?: string;

    @IsNotEmpty()
    @IsString()
    colorText?: string;

    @IsNotEmpty()
    @IsString()
    colorTextSecondary?: string;

    @IsNotEmpty()
    @IsString()
    colorTextTertiary?: string;

    @IsNotEmpty()
    @IsString()
    colorTextQuaternary?: string;

    @IsNotEmpty()
    @IsString()

    colorTextBase?: string;

    @IsNotEmpty()
    @IsString()
    colorTextDescription?: string;

    @IsNotEmpty()
    @IsString()
    colorTextDisabled?: string;

    @IsNotEmpty()
    @IsString()
    colorTextHeading?: string;

    @IsNotEmpty()
    @IsString()
    colorTextLabel?: string;

    @IsNotEmpty()
    @IsString()
    colorTextLightSolid?: string;

    @IsNotEmpty()
    @IsString()
    colorTextPlaceholder?: string;

    @IsNotEmpty()
    @IsString()
    colorBgLayout?: string;

    @IsNotEmpty()
    @IsString()
    colorBgBase?: string;

    @IsNotEmpty()
    @IsString()
    colorBgBlur?: string;

    @IsNotEmpty()
    @IsString()
    colorBgContainer?: string;

    @IsNotEmpty()
    @IsString()
    colorBgContainerDisabled?: string;

    @IsNotEmpty()
    @IsString()
    colorBgTextActive?: string;

    @IsNotEmpty()
    @IsString()
    colorBgTextHover?: string;

    @IsNotEmpty()
    @IsString()
    colorError?: string;

    @IsNotEmpty()
    @IsString()
    colorErrorBg?: string;

    @IsNotEmpty()
    @IsString()
    colorErrorBorder?: string;

    @IsNotEmpty()
    @IsString()
    colorErrorText?: string;

    @IsNotEmpty()
    @IsNumber()
    borderRadius?: number;

    @IsNotEmpty()
    @IsNumber()
    borderRadiusLG?: number;

    @IsNotEmpty()
    @IsNumber()
    borderRadiusOuter?: number;

    @IsNotEmpty()
    @IsNumber()
    borderRadiusSM?: number;

    @IsNotEmpty()
    @IsNumber()
    borderRadiusXS?: number;

    @IsNotEmpty()
    @IsString()
    colorBorder?: string;

    @IsNotEmpty()
    @IsString()
    colorBorderBg?: string;

    @IsNotEmpty()
    @IsString()
    colorBorderSecondary?: string;

    @IsNotEmpty()
    @IsString()
    colorInfoBorder?: string;

    @IsNotEmpty()
    @IsString()
    colorInfoBorderHover?: string;

    @IsNotEmpty()
    @IsString()
    colorErrorBorderHover?: string;

    @IsNotEmpty()
    @IsString()
    colorSuccessBorderHover?: string;

    @IsNotEmpty()
    @IsString()
    colorSuccessBorder?: string;

    @IsNotEmpty()
    @IsString()
    colorWarningBorder?: string;

    @IsNotEmpty()
    @IsString()
    colorWarningBorderHover?: string;

    @IsNotEmpty()
    @IsString()
    colorInfoText?: string;

    @IsNotEmpty()
    @IsString()
    colorInfoTextHover?: string;

    @IsNotEmpty()
    @IsString()
    colorInfoBg?: string;

    @IsNotEmpty()
    @IsString()
    colorInfoBgHover?: string;

    @IsNotEmpty()
    @IsString()
    colorInfoTextActive?: string;

    @IsNotEmpty()
    @IsString()
    colorErrorTextActive?: string;

    @IsNotEmpty()
    @IsString()
    colorErrorTextHover?: string;

    @IsNotEmpty()
    @IsString()
    colorSuccessTextHover?: string;

    @IsNotEmpty()
    @IsString()
    colorSuccessTextActive?: string;

    @IsNotEmpty()
    @IsString()
    colorSuccessText?: string;

    @IsNotEmpty()
    @IsString()
    colorWarningText?: string;

    @IsNotEmpty()
    @IsString()
    colorWarningTextActive?: string;

    @IsNotEmpty()
    @IsString()
    colorWarningTextHover?: string;

    @IsNotEmpty()
    @IsString()
    boxShadow?: string;

    @IsNotEmpty()
    @IsString()
    boxShadowSecondary?: string;

    @IsNotEmpty()
    @IsString()
    boxShadowTertiary?: string;

    @IsNotEmpty()
    @IsString()
    colorFill?: string;

    @IsNotEmpty()
    @IsString()
    colorFillContent?: string;

    @IsNotEmpty()
    @IsString()
    colorFillContentHover?: string;

    @IsNotEmpty()
    @IsString()
    colorFillSecondary?: string;

    @IsNotEmpty()
    @IsString()
    colorFillTertiary?: string;

    @IsNotEmpty()
    @IsString()
    colorFillQuaternary?: string;


    
    @IsNotEmpty()
    @IsNumber()
    padding?: number;

    @IsNotEmpty()
    @IsNumber()
    paddingLG?: number;

    @IsNotEmpty()
    @IsNumber()
    paddingSM?: number;

    @IsNotEmpty()
    @IsNumber()
    paddingXS?: number;

    @IsNotEmpty()
    @IsNumber()
    paddingXXS?: number;



    @IsNotEmpty()
    @IsNumber()
    margin?: number;

    @IsNotEmpty()
    @IsNumber()
    marginLG?: number;

    @IsNotEmpty()
    @IsNumber()
    marginSM?: number;

    @IsNotEmpty()
    @IsNumber()
    marginXS?: number;

    @IsNotEmpty()
    @IsNumber()
    marginXXS?: number;
}

//template json:
// {
//     "name": "default",
//     "colorPrimary": "#1890ff",
//     "colorFillSecondary": "#f0f2f5",
//     "borderRadius": 3,
//     "colorBorder": "#d9d9d9",
//     "colorBgLayout": "#f5f5f5",
//     "colorBgBase": "#ffffff",
//     "colorText": "#000000",
//     "colorTextSecondary": "#595959",
//     "colorTextDisabled": "#bfbfbf"
// }