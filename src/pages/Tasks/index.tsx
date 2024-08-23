import React, { useEffect, useState } from "react";
import "./styles.scss";
import Title from "../../components/Title";
import { FaPlus } from "react-icons/fa";
import Button from "../../components/Button";
import Table from "../../components/Table";
import Column from "../../components/Table/Column";
import Select from "../../components/Form/Select";
import Modal from "../../components/Modal";
import Input from "../../components/Form/Input";
import { formatDate, formatDateTime } from "../../utils/formater";
import { getTasks, updateTaskStatus, createTask } from "../../services/tasks";

function Tasks() {
  const [tableData, setTableData] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("Todos");
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const data = await getTasks();
        setTableData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      const updatedTask = await updateTaskStatus(id, newStatus);
      setTableData((prevData) =>
        prevData.map((item) => (item.id === id ? updatedTask : item))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateTask = async () => {
    if (!task.trim()) {
      setError(true);
      return;
    }

    try {
      setLoading(true);
      const newTask = await createTask(task.trim());
      setTableData((prevData) => [...prevData, newTask]);
      setTask("");
      setError(false);
      setModalOpen(false);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = tableData.filter(
    (item) => statusFilter === "Todos" || item.status === statusFilter
  );

  return (
    <div className="container">
      <Title
        title="Gestão de tarefas"
        subtitle="Crie organize e delegue tarefas para os seus funcionários."
        button={
          <Button
            title="Criar nova tarefa"
            icon={<FaPlus />}
            onClick={() => setModalOpen(true)}
          />
        }
      />
      <div className="filter">
        <span>Filtrar por:</span>
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="Todos">Todos</option>
          <option value="Pendente">Pendentes</option>
          <option value="Concluida">Concluídas</option>
        </Select>
      </div>

      <Table data={filteredData} itemsPerPage={10} loading={loading}>
        <Column title="Título">{(data) => data.title}</Column>
        <Column title="Última Atualização">
          {(data) => formatDateTime(data.updatedAt)}
        </Column>
        <Column title="Criado em">
          {(data) => formatDate(data.createdAt)}
        </Column>
        <Column title="Status">
          {(data: { status: string; id: number }) => {
            const statusClass = data.status === "Pendente" ? "pendente" : "concluida";
            return (
              <Select
                value={data.status}
                onChange={(newStatus) => handleStatusChange(data.id, newStatus)}
                className={statusClass}
              >
                <option value="Pendente">Pendente</option>
                <option value="Concluida">Concluída</option>
              </Select>
            );
          }}
        </Column>
      </Table>

      <Modal
        title="Criar nova tarefa"
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        onConfirm={handleCreateTask}
      >
        <Input
          type="text"
          label="Tarefa"
          name="tarefa"
          value={task}
          error={error}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setTask(e.target.value)
          }
        />
      </Modal>
    </div>
  );
}

export default Tasks;
