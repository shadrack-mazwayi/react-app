import React, { useState } from "react";

export default function TestCaseForm() {
  const [form, setForm] = useState({
    testSet: "",
    testGroup: "",
    description: "",
    date: "",
    steps: [""],
    preconditions: [""],
    members: [""]
  });

  const updateField = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const updateList = (field, index, value) => {
    const updated = [...form[field]];
    updated[index] = value;
    setForm({ ...form, [field]: updated });
  };

  const addItem = (field) => {
    setForm({ ...form, [field]: [...form[field], ""] });
  };

  const removeItem = (field, index) => {
    const updated = form[field].filter((_, i) => i !== index);
    setForm({ ...form, [field]: updated });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Test Case Builder</h1>

      {/* Basic Info */}
      <div className="grid grid-cols-2 gap-4">
        <input
          className="border p-2 rounded"
          placeholder="Test Set"
          value={form.testSet}
          onChange={(e) => updateField("testSet", e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Test Group"
          value={form.testGroup}
          onChange={(e) => updateField("testGroup", e.target.value)}
        />
      </div>

      {/* Description */}
      <textarea
        className="border p-2 rounded w-full"
        placeholder="Test Description"
        value={form.description}
        onChange={(e) => updateField("description", e.target.value)}
      />

      {/* Preconditions */}
      <div>
        <h2 className="font-semibold mb-2">Preconditions</h2>
        {form.preconditions.map((item, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              className="border p-2 rounded flex-1"
              value={item}
              onChange={(e) => updateList("preconditions", i, e.target.value)}
            />
            <button
              className="bg-red-500 text-white px-2 rounded"
              onClick={() => removeItem("preconditions", i)}
            >
              X
            </button>
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => addItem("preconditions")}
        >
          + Add Precondition
        </button>
      </div>

      {/* Steps */}
      <div>
        <h2 className="font-semibold mb-2">Test Steps</h2>
        {form.steps.map((step, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              className="border p-2 rounded flex-1"
              value={step}
              onChange={(e) => updateList("steps", i, e.target.value)}
              placeholder={`Step ${i + 1}`}
            />
            <button
              className="bg-red-500 text-white px-2 rounded"
              onClick={() => removeItem("steps", i)}
            >
              X
            </button>
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => addItem("steps")}
        >
          + Add Step
        </button>
      </div>

      {/* Members */}
      <div>
        <h2 className="font-semibold mb-2">Test Members</h2>
        {form.members.map((member, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input
              className="border p-2 rounded flex-1"
              value={member}
              onChange={(e) => updateList("members", i, e.target.value)}
            />
            <button
              className="bg-red-500 text-white px-2 rounded"
              onClick={() => removeItem("members", i)}
            >
              X
            </button>
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => addItem("members")}
        >
          + Add Member
        </button>
      </div>

      {/* Date */}
      <input
        type="date"
        className="border p-2 rounded"
        value={form.date}
        onChange={(e) => updateField("date", e.target.value)}
      />

      {/* Output Preview */}
      <div className="mt-6 p-4 border rounded bg-gray-50">
        <h2 className="font-semibold mb-2">Preview (JSON)</h2>
        <pre className="text-sm">{JSON.stringify(form, null, 2)}</pre>
      </div>
    </div>
  );
}
