import {FC} from "react";

type Props = {
    tag: string;
};

const Tag: FC<Props> = ({tag}) => {
    return (
        <div className="bg-transparent border-2 border-third px-2 rounded-lg cursor-pointer">
            {tag}
        </div>
    )
}

export default Tag;