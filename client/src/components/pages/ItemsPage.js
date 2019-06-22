import React from 'react';
import { MDBRow } from 'mdbreact';
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import TableSection from './sections/TableSection';
import BreadcrumSection from './sections/BreadcrumSection';
import ChartSection1 from './sections/ChartSection1';
import ChartSection2 from './sections/ChartSection2';
import MapSection from './sections/MapSection';
import ModalSection from './sections/ModalSection';
import { MDBCard, MDBCol, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';

const ItemsPage =  () => {
  return (
    <React.Fragment>
      <BreadcrumSection />
      <AdminCardSection1 />
      <ChartSection1 />
      <TableSection />
      <ChartSection2 />
      <MDBRow className="mb-4">
          <MDBCard>
              <MDBCardImage className="img-fluid" src={src1} />
              <MDBCardBody>
                  <MDBCardTitle className="text-center mb-2 font-bold">Alice Mayer</MDBCardTitle>
                  <MDBCardTitle sub className="text-center indigo-text mb-2 font-bold">Photographer</MDBCardTitle>
                  <MDBCardText>
                      <strong className="mb-2">About:</strong>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis quod animi dignissimos consectetur quibusdam numquam laboriosam, minus, provident...
                  </MDBCardText>
                  <div className="row justify-content-end pr-1">
                      <MDBBtn size="sm" outline color="primary">More...</MDBBtn>
                  </div>
              </MDBCardBody>
          </MDBCard>
      </MDBRow>
      <AdminCardSection2 />
    </React.Fragment>
  )
}

export default ItemsPage;