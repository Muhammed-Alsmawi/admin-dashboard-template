import { Col, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/layout/PageBreadcrumb';
import PageMetaData from '@/components/PageTitle';
import UIExamplesList from '@/components/UIExamplesList';
import AllBarCharts from './components/AllBarCharts';
const BarCharts = () => {
  return <>
      <PageBreadcrumb subName="Charts" title="Area Charts" />
      <PageMetaData title="Bar Charts" />

      <Row>
        <Col xl={9}>
          <AllBarCharts />
        </Col>
        <Col xl={3}>
          <UIExamplesList examples={[{
          link: '#basic',
          label: 'Basic Bar Chart'
        }, {
          link: '#grouped',
          label: 'Grouped Bar Chart'
        }, {
          link: '#stacked',
          label: 'Stacked Bar Chart'
        }, {
          link: '#full-stacked',
          label: '100% Stacked Bar Chart'
        }, {
          link: '#negative',
          label: 'Bar with Negative Values'
        }, {
          link: '#reversed',
          label: 'Reversed Bar Chart'
        }, {
          link: '#image-fill',
          label: 'Bar with Image Fill'
        }, {
          link: '#datalables',
          label: 'Custom DataLabels Bar'
        }, {
          link: '#pattern',
          label: 'Patterned Bar Chart'
        }, {
          link: '#markers',
          label: 'Bar with Markers'
        }]} />
        </Col>
      </Row>
    </>;
};
export default BarCharts;