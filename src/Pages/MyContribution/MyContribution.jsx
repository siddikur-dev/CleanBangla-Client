import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// PDF Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#1d4ed8", // primary color
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    marginBottom: 5,
  },
  separator: {
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

// PDF Document Component
const ContributionPDF = ({ contributions }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>My Contributions Report</Text>
      {contributions.map((item, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.value}>
            <Text style={styles.label}>Issue Title:</Text> {item.issueTitle}
          </Text>
          <Text style={styles.value}>
            <Text style={styles.label}>Category:</Text> {item.category}
          </Text>
          <Text style={styles.value}>
            <Text style={styles.label}>Paid Amount:</Text> ৳{item.amount}
          </Text>
          <Text style={styles.value}>
            <Text style={styles.label}>Date:</Text>{" "}
            {new Date(item.date).toLocaleDateString()}
          </Text>
          <Text style={styles.value}>
            <Text style={styles.label}>Status:</Text> {item.status}
          </Text>
          <View style={styles.separator} />
        </View>
      ))}
    </Page>
  </Document>
);

const MyContribution = () => {
  const [contributions, setContributions] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // Fetch only logged-in user's contributions
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/all-contributions?email=${user.email}`)
        .then((res) => setContributions(res.data))
        .catch((err) => console.log(err));
    }
  }, [user, axiosSecure]);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center">
        My <span className="text-primary">Contributions</span>
      </h2>

      {contributions.length === 0 ? (
        <div className="bg-base-200 p-12 rounded-xl text-center text-base-content/70 shadow-lg animate-fadeIn">
          ❌ No Contributions Yet <br />
          <span className="text-sm text-base-content/50 mt-2 inline-block">
            You haven’t supported any issue so far.
          </span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributions.map((item) => (
              <div
                key={item._id}
                className="bg-base-100 shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {item.issueTitle}
                  </h3>
                  <p className="text-sm text-base-content/70 capitalize mb-2">
                    Category:{" "}
                    <span className="text-primary">{item.category}</span>
                  </p>
                  <p className="text-base font-semibold text-primary mb-2">
                    Paid Amount: ৳{item.amount}
                  </p>
                  <p className="text-sm text-base-content/60 flex items-center gap-1">
                    <FaRegCalendarAlt />{" "}
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <PDFDownloadLink
              document={<ContributionPDF contributions={contributions} />}
              fileName="my_contributions_report.pdf"
              className="btn btn-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
            </PDFDownloadLink>
          </div>
        </>
      )}
    </div>
  );
};

export default MyContribution;
