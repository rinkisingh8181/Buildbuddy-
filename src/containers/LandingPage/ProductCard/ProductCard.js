import React, { Component } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import { FormattedMessage } from '../../../util/reactIntl';
import { lazyLoadWithDimensions } from '../../../util/contextHelpers';

import { Button, IconReviewStar, NamedLink, ReviewRating } from '../../../components';

import css from './ProductCard.module.css';

// Update images by saving images to src/LandingPage/SeactionFilteredSearches/images directory.
// If those images have been saved with the same name, no need to make changes to these imports.

import { PRODUCT_CARD_DATA } from '../../../util/testData';

// Thumbnail image for the search "card"
class ThumbnailImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
// Load the image only if it's close to viewport (user has scrolled the page enough).
const LazyImage = lazyLoadWithDimensions(ThumbnailImage);

const stars = [1, 2, 3, 4, 5];
// Create a "card" that contains a link to filtered search on SearchPage.
const FilterLink = props => {
  const { name, image, link, desc, isSearch } = props;
  const url = typeof window !== 'undefined' ? new window.URL(link) : new global.URL(link);
  const searchQuery = url.search;
  const nameText = <span className={css.searchName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.searchLink}>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <div className={css.aspectWrapper}>
            <LazyImage src={image} alt={name} className={css.searchImage} />

            {!!isSearch && (
              <div className={css.label}>
                <h3>SGD 120</h3>
              </div>
            )}
          </div>
        </div>

        <div className={css.detailContainer}>
          {!isSearch && <h3>SGD 120</h3>}
          <div className={css.linkText}>
            <FormattedMessage
              id="SectionFilteredSearches.filteredSearch"
              values={{ filter: nameText }}
            />
          </div>
          {!!isSearch &&
            stars.map(star => {
              return <IconReviewStar className={css.filled} isFilled />;
            })}
          {isSearch ? (
            <p className={css.description}>{desc}</p>
          ) : (
            <p className={css.description}>Sold by Rinki S.</p>
          )}
        </div>
        {!!isSearch && (
          <div className={css.buttonContainer}>
            <Button rootClassName={css.order} onClick={() => {}}>
              Click me
            </Button>
            <Button rootClassName={css.payment} onClick={() => {}}>
              Click me
            </Button>
          </div>
        )}
      </div>
    </NamedLink>
  );
};

// Component that shows full-width section on LandingPage.
// Inside it shows 3 "cards" that link to SearchPage with specific filters applied.
const ProductCard = props => {
  const { rootClassName, className, isSearch = false } = props;
  const classes = classNames(rootClassName || css.root, className);

  console.log('isSearch', isSearch);

  // FilterLink props:
  // - "name" is a string that defines what kind of search the link is going to make
  // - "image" is imported from images directory and you can update it by changing the file
  // - "link" should be copy-pasted URL from search page.
  //    The domain doesn't matter, but search query does. (I.e. "?pub_brand=nike")
  return (
    <div className={classes}>
      {!!isSearch && (
        <div className={css.title}>
          <FormattedMessage id="ProductCard.title" />
        </div>
      )}
      <div className={css.filteredSearches}>
        {PRODUCT_CARD_DATA?.map(val => {
          return (
            <FilterLink
              name={val?.title}
              image={val?.image}
              link={val?.link}
              key={val.data_Id}
              desc={val.desc}
              isSearch={isSearch}
            />
          );
        })}
      </div>
    </div>
  );
};

ProductCard.defaultProps = { rootClassName: null, className: null };

ProductCard.propTypes = {
  rootClassName: string,
  className: string,
};

export default ProductCard;
