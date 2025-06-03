import { BookingInquiryData } from '@/lib/types/booking';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';

interface BookingInquiryEmailProps {
  data: BookingInquiryData;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export default function BookingInquiryEmail({ data }: BookingInquiryEmailProps) {
  const previewText = `New Booking Inquiry: ${data.preferredService || 'General'} - ${data.name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/twin-cities-auto-detailers-logo.png`}
            width="120"
            height="auto"
            alt="Twin Cities Auto Detailers"
            style={logo}
          />
          <Heading style={heading}>New Booking Inquiry Received</Heading>
          <Text style={paragraph}>You have received a new booking inquiry with the following details:</Text>

          <Section style={section}>
            <Row>
              <Column style={label}>Name:</Column>
              <Column style={value}>{data.name}</Column>
            </Row>
            <Row>
              <Column style={label}>Email:</Column>
              <Column style={value}><Link href={`mailto:${data.email}`}>{data.email}</Link></Column>
            </Row>
            <Row>
              <Column style={label}>Phone:</Column>
              <Column style={value}><Link href={`tel:${data.phone}`}>{data.phone}</Link></Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading style={subHeading}>Vehicle Details</Heading>
            <Row>
              <Column style={label}>Make:</Column>
              <Column style={value}>{data.vehicleMake}</Column>
            </Row>
            <Row>
              <Column style={label}>Model:</Column>
              <Column style={value}>{data.vehicleModel}</Column>
            </Row>
            <Row>
              <Column style={label}>Year:</Column>
              <Column style={value}>{data.vehicleYear}</Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading style={subHeading}>Service Request</Heading>
            <Row>
              <Column style={label}>Preferred Service:</Column>
              <Column style={value}>{data.preferredService}</Column>
            </Row>
            {data.preferredDate && (
              <Row>
                <Column style={label}>Preferred Date:</Column>
                <Column style={value}>{new Date(data.preferredDate).toLocaleDateString()}</Column>
              </Row>
            )}
            {data.preferredTime && (
              <Row>
                <Column style={label}>Preferred Time:</Column>
                <Column style={value}>{data.preferredTime}</Column>
              </Row>
            )}
          </Section>

          {data.message && (
            <>
              <Hr style={hr} />
              <Section style={section}>
                <Heading style={subHeading}>Additional Message</Heading>
                <Text style={paragraph}>{data.message}</Text>
              </Section>
            </>
          )}

          <Hr style={hr} />

          <Text style={footer}>Please follow up with the customer as soon as possible.</Text>

        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: '20px 0',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #eee',
  borderRadius: '5px',
  boxShadow: '0 2px 3px rgba(0,0,0,0.06)',
  maxWidth: '600px',
};

const logo = {
  margin: '0 auto 20px auto',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold' as const,
  textAlign: 'center' as const,
  marginBottom: '20px',
  color: '#333',
};

const subHeading = {
  fontSize: '18px',
  fontWeight: 'bold' as const,
  marginTop: '20px',
  marginBottom: '10px',
  color: '#444',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#333',
  marginBottom: '20px',
};

const section = {
  marginBottom: '20px',
};

const label = {
  fontSize: '14px',
  fontWeight: 'bold' as const,
  color: '#555',
  width: '150px',
  paddingRight: '10px',
};

const value = {
  fontSize: '14px',
  color: '#333',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '1.5',
  textAlign: 'center' as const,
  marginTop: '20px',
}; 