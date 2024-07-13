import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const TermsOfServiceScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Terms of Service</Text>
      <Text style={styles.paragraph}>
      1. Accessibility of the Website and its Services
Myitronline Global Services Private Limited is a global website that can be accessed and availed for services from any part of the world, provided the concerned service is related to e-ITR filing and Legal Services for Businesses that are operational ONLY in India.
Only those clients will be eligible to avail services from Myitronline Global Services Private Limited who fulfil all of company’s Terms and Conditions, that include identity, relevant service type, relevant date, relevant information (along with proofs wherever required), legal terms as per applicable law of India, terms of payment.
Supplying fake/misleading information from client’s end will be treated as a malpractice and subject to legal obligation that the company may initiate as per the provision of Indian Law.
User should provide authentic identity proof and location information to avail the services that we provide during the registration/placing query.
No user should violate the Terms and Conditions followed in Myitronline Global Services Private Limited website.
      </Text>
      <Text style={styles.paragraph}>
      2. Our Service Agreement
In order to avail any of our services, you need to fulfil the Terms and Conditions of Client Registration procedure that is followed in Myitronline Global Services Private Limited and furnish the necessary valid information (subject to verification) for the same.
Once you register successfully for any of our service, Myitronline Global Services Private Limited will be solely responsible to deal and execute the service commitment within prescribed tenure. Our team may communicate by mail/phone/whatsapp to ask for specific updates (if required).
Myitronline Global Services Private Limited is an authorized e-return intermediary registered with the Income Tax Department of India and accordingly reserves right to access client’s information available in IT Department within the terms of service given to them.
Myitronline Global Services Private Limited reserves right to terminate/seek legal assistance in against of a service requested by client in case of any violation of company’s Terms and Conditions.
Also, you agree to give us permission for calculating your tax return on behalf of you and get permission to access the relevant information provided by you.
We do not take any liabilities for delay in services such as late-issue of income technical, mechanical or natural reasons.
      </Text>
      <Text style={styles.paragraph}>
      3. Terms of Service
Myitronline Global Services Private Limited provides service as per the specified payment terms that the client agrees during the service registration.
Based on additional services availed by the client, Myitronline Global Services Private Limited reserves right to finalize the payment amount.
Failure in clearing payments or delay in transfer from client’s account can lead to the termination of the agreed service.
Users’ are requested to go through the Terms and Conditions of company’s Refund Policy before availing any service.
      </Text>
      <Text style={styles.paragraph}>
      4. Our Compulsion
Myitronline Global Services Private Limited does not take any liabilities for any losses caused by lack of information provided by you.
The company is not liable for any delay caused by the Indian IT department in processing your Income Tax Forms or Income Tax Refund.
We work as per the Privacy Policy that is defined to strictly safeguard client’s confidentiality and company’s security that a user should go through carefully.
Myitronline Global Services Private Limited reserves right the make changes in Terms of Services without prior notification, clients will receive notification once such modification
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
    color: "#555",
    textAlign: "justify",
  },
});

export default TermsOfServiceScreen;
