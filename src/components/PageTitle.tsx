interface Props {
  title: string;
}

function PageTitle({ title }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
    </div>
  );
}

export default PageTitle;
