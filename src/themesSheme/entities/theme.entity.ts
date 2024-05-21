import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Theme {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdAt?: Date

    @UpdateDateColumn()
    updatedAt?: Date


    //for antdesign
    @Column()
    name?: string;

    @Column()
    colorLink?: string;

    @Column()
    colorLinkActive?: string;

    @Column()
    colorLinkHover?: string;

    @Column()
    colorPrimary?: string;

    @Column()
    colorPrimaryActive?: string;

    @Column()
    colorPrimaryHover?: string;

    @Column()
    colorPrimaryBg?: string;

    @Column()
    colorPrimaryBorder?: string;

    @Column()
    colorPrimaryBgHover?: string;

    @Column()
    colorPrimaryBorderHover?: string;

    @Column()
    colorPrimaryText?: string;

    @Column()
    colorPrimaryTextActive?: string;

    @Column()
    colorPrimaryTextHover?: string;

    @Column()
    colorText?: string;

    @Column()
    colorTextSecondary?: string;

    @Column()
    colorTextTertiary?: string;

    @Column()
    colorTextQuaternary?: string;

    @Column()

    colorTextBase?: string;

    @Column()
    colorTextDescription?: string;

    @Column()
    colorTextDisabled?: string;

    @Column()
    colorTextHeading?: string;

    @Column()
    colorTextLabel?: string;

    @Column()
    colorTextLightSolid?: string;

    @Column()
    colorTextPlaceholder?: string;

    @Column()
    colorBgLayout?: string;

    @Column()
    colorBgBase?: string;

    @Column()
    colorBgBlur?: string;

    @Column()
    colorBgContainer?: string;

    @Column()
    colorBgContainerDisabled?: string;

    @Column()
    colorBgTextActive?: string;

    @Column()
    colorBgTextHover?: string;

    @Column()
    colorError?: string;

    @Column()
    colorErrorBg?: string;

    @Column()
    colorErrorBorder?: string;

    @Column()
    colorErrorText?: string;

    @Column()
    borderRadius?: number;

    @Column()
    borderRadiusLG?: number;

    @Column()
    borderRadiusOuter?: number;

    @Column()
    borderRadiusSM?: number;

    @Column()
    borderRadiusXS?: number;

    @Column()
    colorBorder?: string;

    @Column()
    colorBorderBg?: string;

    @Column()
    colorBorderSecondary?: string;

    @Column()
    colorInfoBorder?: string;

    @Column()
    colorInfoBorderHover?: string;

    @Column()
    colorErrorBorderHover?: string;

    @Column()
    colorSuccessBorderHover?: string;

    @Column()
    colorSuccessBorder?: string;

    @Column()
    colorWarningBorder?: string;

    @Column()
    colorWarningBorderHover?: string;

    @Column()
    colorInfoText?: string;

    @Column()
    colorInfoTextHover?: string;

    @Column()
    colorInfoBg?: string;

    @Column()
    colorInfoBgHover?: string;

    @Column()
    colorInfoTextActive?: string;

    @Column()
    colorErrorTextActive?: string;

    @Column()
    colorErrorTextHover?: string;

    @Column()
    colorSuccessTextHover?: string;

    @Column()
    colorSuccessTextActive?: string;

    @Column()
    colorSuccessText?: string;

    @Column()
    colorWarningText?: string;

    @Column()
    colorWarningTextActive?: string;

    @Column()
    colorWarningTextHover?: string;

    @Column()
    boxShadow?: string;

    @Column()
    boxShadowSecondary?: string;

    @Column()
    boxShadowTertiary?: string;

    @Column()
    colorFill?: string;

    @Column()
    colorFillContent?: string;

    @Column()
    colorFillContentHover?: string;

    @Column()
    colorFillSecondary?: string;

    @Column()
    colorFillTertiary?: string;

    @Column()
    colorFillQuaternary?: string;

    @Column()
    padding?: number;

    @Column()
    paddingLG?: number;

    @Column()
    paddingSM?: number;

    @Column()
    paddingXS?: number;

    @Column()
    paddingXXS?: number;

    @Column()

    margin?: number;

    @Column()
    marginLG?: number;

    @Column()
    marginSM?: number;

    @Column()
    marginXS?: number;

    @Column()
    marginXXS?: number;
}
