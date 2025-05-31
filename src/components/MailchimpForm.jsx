import MailchimpSubscribe from "react-mailchimp-subscribe";

export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  if (!postUrl.includes("list-manage")) {
    console.error("Mailchimp URL is invalid:", postUrl);
    return <p style={{ color: "red" }}>Invalid Mailchimp URL. Check environment variables.</p>;
  }

  return (
    <div>
      <MailchimpSubscribe url={postUrl} />
    </div>
  );
};
