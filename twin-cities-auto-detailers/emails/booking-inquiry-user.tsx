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
  Text,
} from '@react-email/components';
import * as React from 'react';

interface BookingInquiryUserEmailProps {
  name?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
const mainContactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@twincitiesautodetailers.com';
const mainPhoneNumber = process.env.NEXT_PUBLIC_CONTACT_PHONE || '(123) 456-7890';

export default function BookingInquiryUserEmail({ name }: BookingInquiryUserEmailProps) {
  const previewText = `Your Inquiry to Twin Cities Auto Detailers Has Been Received`;
  const userName = name || 'Valued Customer';

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
          <Heading style={heading}>Thank You For Your Inquiry, {userName}!</Heading>
          <Text style={paragraph}>
            We have successfully received your booking inquiry. A member of our team will review your request
            and get in touch with you shortly to discuss the details and confirm your appointment.
          </Text>
          <Text style={paragraph}>
            If you have any urgent questions, feel free to contact us directly at{' '}
            <Link href={`mailto:${mainContactEmail}`} style={link}>{mainContactEmail}</Link> or call us at{' '}
            <Link href={`tel:${mainPhoneNumber}`} style={link}>{mainPhoneNumber}</Link>.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Twin Cities Auto Detailers | Quality detailing, exceptional service.
            <br />
            <Link href={baseUrl} style={link}>{baseUrl}</Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles (can be shared or adapted from admin email)
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
  fontSize: '22px',
  fontWeight: 'bold' as const,
  textAlign: 'center' as const,
  marginBottom: '20px',
  color: '#333',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#333',
  marginBottom: '20px',
};

const link = {
  color: '#007bff',
  textDecoration: 'underline',
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