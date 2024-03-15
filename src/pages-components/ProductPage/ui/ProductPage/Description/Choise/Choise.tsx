import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './Choise.module.scss';

interface ChoiseProps {
  className?: string;
}

const Choise: FC<ChoiseProps> = (props) => {
    const { className } = props;
    const color = 'Black';
    const label = 'Color';
    const chooseSize = 'Choose size';
    const sizeGuide = 'Size guide';
    const addToBag = 'Add to bag';

    return (
        <div className={classNames(cls.Choise, {}, [className])}>
            <div className={classNames(cls.LabelWrapper)}>
                <p className={classNames(cls.Label)}>{label}</p>
                <p className={classNames(cls.Text)}>{color}</p>
            </div>
            <ul className={classNames(cls.ProductColorsList)}>
                <li className={classNames(cls.ProductColorItem)}>
                    <img src="" alt="" />
                </li>
                <li className={classNames(cls.ProductColorItem)}>
                    <img src="" alt="" />
                </li>
                <li className={classNames(cls.ProductColorItem)}>
                    <img src="" alt="" />
                </li>
                <li className={classNames(cls.ProductColorItem)}>
                    <img src="" alt="" />
                </li>
            </ul>
            <div className={classNames(cls.Size)}>
                <div className={classNames(cls.SizeText)}>
                    <p className={classNames(cls.SizeLabel)}>{chooseSize}</p>
                    <p className={classNames(cls.SizeGuideLink)}>{sizeGuide}</p>
                </div>
                <div className={classNames(cls.Dropdown)}>{}</div>
                <Button
                    theme={ThemeButton.CLEAR}
                    className={classNames(cls.AddToBagButton)}
                >
                    {addToBag}
                </Button>
            </div>
        </div>
    );
};

export default Choise;
