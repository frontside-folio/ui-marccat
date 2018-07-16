import React from 'react';
import { Row, Col } from '@folio/stripes-components/lib/LayoutGrid';
import Select from '@folio/stripes-components/lib/Select';
import MultiColumnList from '@folio/stripes-components/lib/MultiColumnList';
import { connect } from '@folio/stripes-connect';
import * as C from '../../Utils';

class TagSelect extends React.Component {
  static manifest = Object.freeze({
    marcCategory: {},
    subFileds: {},
    marcCategories: {
      type: C.RESOURCE_TYPE,
      root: C.ENDPOINT.BASE_URL,
      path: C.ENDPOINT.CATEGORY_URL,
      headers: C.ENDPOINT.HEADERS,
      records: C.API_RESULT_JSON_KEY.CATEGORIES,
      params: { lang: C.ENDPOINT.DEFAULT_LANG },
    },
    heading: {
      type: C.RESOURCE_TYPE,
      root: C.ENDPOINT.BASE_URL,
      path: 'heading-types?lang=ita&marcCategory=%{marcCategory}',
      headers: C.ENDPOINT.HEADERS,
      records: C.API_RESULT_JSON_KEY.HEADING_TYPES,
    },
  });

  constructor(props) {
    super(props);
    this.state = {
      firstSelect: '',
      secondSelect: '',
      marcCategoryValue: 1,
      tableContent: this.props.mandatoryField,
      open: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSource = this.handleChangeSource.bind(this);
  }

  componentDidMount() {
    this.props.mutator.marcCategory.replace(this.state.marcCategoryValue);
  }

  handleChange = event => {
    this.setState({
      firstSelect: event.target.value,
    });
    this.props.mutator.marcCategory.replace(event.target.value);
  };

  handleChangeSource = event => {
    this.setState({ secondSelect: event.target.value });
    const prefix = event.target[event.target.value - 1].innerHTML.split(' ')[0];
    this.props.defaultValue.description = `${prefix}- ${event.target[event.target.value - 1].innerHTML} ${event.target.value}`;
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  buildPreviewChoosed = () => {};

  render() {
    const {
      resources: { marcCategories, heading },
    } = this.props;
    if (!marcCategories || !marcCategories.hasLoaded) {
      return <div />;
    }

    if (!heading || !heading.hasLoaded) return <div />;

    let options = {};
    let headings = {};
    if (marcCategories) {
      options = marcCategories.records.map(element =>
        <option value={element.value}>{element.label}</option>);
    }
    if (heading) {
      headings = heading.records.map(element =>
        <option value={element.value}>{element.label}</option>);
    }
    return (
      <div style={{ width: '100%' }}>
        <Row id="section-table">
          <MultiColumnList
            columnWidths={{ description: '40%' }}
            contentData={this.state.tableContent}
            onRowClick={() => {}}
            visibleColumns={[
              'code',
              'description',
              'categoryCode',
              'headerTypeCode',
              'displayValue',
            ]}
            ariaLabel="TemplateNewMandatory"
          />
        </Row>
        <p style={{ margin: '8px', marginTop: '20px' }}>
          Default value:{' '}
          <strong>
            {this.props.defaultValue.description} {this.props.defaultValue.displayValue}
          </strong>
        </p>
        <Row>
          <Col xs={5}>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.firstSelect}
              onChange={this.handleChange}
            >
              {options}
            </Select>
          </Col>
          <Col xs={5}>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.secondSelect}
              onChange={this.handleChangeSource}
            >
              {headings}
            </Select>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  TagSelect,
  C.META.MODULE_NAME,
);
