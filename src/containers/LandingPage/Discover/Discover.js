import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FormattedMessage } from '../../../util/reactIntl';

import { NamedLink } from '../../../components';

import css from './Discover.module.css';

const Discover = props => {
    const { rootClassName, className } = props;

    const classes = classNames(rootClassName || css.root, className);
    return (
        <div className={classes}>
            <div >
                <div className={css.rootBackground}>
                    <div className={css.title}>
                        <h1 className={css.titleH1}> <FormattedMessage id="Discover.title" /></h1>
                        <h5 className={css.titleH5}>3 Categories to be branded</h5>
                    </div>
                </div>
                <div className={css.steps}>
                    <div className={css.step}>
                        <div className={css.stepContaint}>
                            <h3>Pro <span>Wellness</span></h3>
                            <p>skjfer rejhfer hrefrehfef erhufeirf iuehfeihf eif uiefer hure</p>
                        </div>
                    </div>
                    <div className={css.step}>
                        <div className={css.stepContaint}>
                            <h3>Pro <span>Wellness</span></h3>
                            <p>skjfer rejhfer hrefrehfef erhufeirf iuehfeihf eif uiefer hure</p>
                        </div>
                    </div>
                    <div className={css.step}>
                        <div className={css.stepContaint}>
                            <h3>Pro <span>Wellness</span></h3>
                            <p>skjfer rejhfer hrefrehfef erhufeirf iuehfeihf eif uiefer hure</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

Discover.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

Discover.propTypes = {
    rootClassName: string,
    className: string,
};

export default Discover;
