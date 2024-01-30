import { useRouter } from "next/router";
function DetailPage() {
  const router = useRouter();
  const aboutusId = router.query.aboutusId;

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const detail = details.find((member) => member.id === parseInt(aboutusId));
  return (
    <div>
      {detail ? (
        <>
          <h1>Detail Page</h1>
          <p>
            <strong>Name:</strong> {detail.name}
          </p>
          <p>
            <strong>Role:</strong> {detail.role}
          </p>
        </>
      ) : (
        <p>Developer does't exist.</p>
      )}
    </div>
  );
}

export default DetailPage;
