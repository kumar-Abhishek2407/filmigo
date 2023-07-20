import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {
    return (
        <SearchCard>
            <SearchImgWrapper>
                <img src={image} alt={name} />
            </SearchImgWrapper>
            <h1>
                {name} {Boolean(gender) && `(${gender})`}
            </h1>
            <p>{country ? `Country: ${country}` : 'Country: Unknown'}</p>

            {!!birthday && <p>Born on: {birthday}</p>}
            <p>{deathday ? `Died on: ${deathday}` : 'Alive'}</p>
        </SearchCard>
    );
};

export default ActorsCard;
