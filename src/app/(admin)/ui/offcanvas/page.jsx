import { Col, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/layout/PageBreadcrumb';
import PageMetaData from '@/components/PageTitle';
import UIExamplesList from '@/components/UIExamplesList';
import AllOffcanvas from './components/AllOffcanvas';
const Offcanvas = () => {
  return <>
      <PageBreadcrumb subName="Base UI" title="Offcanvas" />
      <PageMetaData title="Offcanvas" />

      <Row>
        <Col xl={9}>
          <AllOffcanvas />
        </Col>
        <Col xl={3}>
          <UIExamplesList examples={[{
          label: 'Default Offcanvas',
          link: '#default'
        }, {
          label: 'Static Backdrop',
          link: '#static-backdrop'
        }, {
          label: 'Offcanvas Position',
          link: '#offcanvas-position'
        }]} />
        </Col>
      </Row>
    </>;
};
export default Offcanvas;