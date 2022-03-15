import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FormattedMessage } from '../../../util/reactIntl';

import { NamedLink } from '../../../components';

import css from './SectionHowItWorks.module.css';
import { HOW_WORKS_DATA } from '../../../util/testData';

const SectionHowItWorks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionHowItWorks.titleLineOne" />
      </div>

      <div className={css.steps}>
        {HOW_WORKS_DATA?.map(val => {
          console.log('val', val);
          return (
            <div className={css.step} key={val?.data_id}>
              <h2 className={css.stepTitle}>
                <FormattedMessage id={val?.title} />
              </h2>
              <p>
                <FormattedMessage id={val?.text} />
              </p>
            </div>
          );
        })}
      </div>

      <div className={css.createListingLink}>
        <NamedLink name="NewListingPage">
          <FormattedMessage id="SectionHowItWorks.createListingLink" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorks;
