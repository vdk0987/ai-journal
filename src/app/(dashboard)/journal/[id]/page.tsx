import Editor from "@/components/editor";
import getEntry from "@/utils/getEntry";

const entryPage = async ({ params }) => {
  const { id } = await params;
  const entry = await getEntry(id);
  return (
    <div>
      <Editor entry={entry} />
    </div>
  );
};

export default entryPage;
