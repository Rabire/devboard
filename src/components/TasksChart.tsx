import FilterButton from "./FilterButton";

const TasksChart = () => (
  <section className="card space-y-2.5">
    {/* Header */}
    <div className="flex justify-between items-end">
      <h2 className="txt-title">Tâches terminées</h2>
      <FilterButton
        buttons={[
          { label: "Week", onClick: () => null, isActive: false },
          { label: "Month", onClick: () => null, isActive: true },
        ]}
      />
    </div>
    {/* Chart */}
  </section>
);

export default TasksChart;
