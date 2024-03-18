import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import Angle from 'shared/assets/icons/angle-down.svg';
import AddToBagIcon from 'shared/assets/icons/AddToBag.svg';
import cls from './Size.module.scss';

interface SizeProps {
  className?: string;
}

const Size: FC<SizeProps> = (props) => {
    const { className } = props;
    const chooseSize = 'Choose size';
    const sizeGuide = 'Size guide';
    const addToBag = 'Add to bag';
    const dropdownValue = 'L / 14 US';

    return (
        <div className={classNames(cls.Size, {}, [className])}>
            <div className={classNames(cls.SizeText)}>
                <p className={classNames(cls.SizeLabel)}>{chooseSize}</p>
                <p className={classNames(cls.SizeGuideLink)}>{sizeGuide}</p>
            </div>
            <div className={classNames(cls.Dropdown)}>
                <div className={classNames(cls.DefaultItem)}>
                    <span
                        className={classNames(cls.Text)}
                    >
                        {dropdownValue}
                    </span>
                    <Angle />
                </div>
            </div>
            <Button
                theme={ThemeButton.CLEAR}
                className={classNames(cls.AddToBagButton)}
            >
                <AddToBagIcon />
                {addToBag}
            </Button>
        </div>
    );
};

export default Size;
