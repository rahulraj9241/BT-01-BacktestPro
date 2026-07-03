type StatsCardProps = {
      title: string;
        value: string;
        };

        function StatsCard({ title, value }: StatsCardProps) {
          return (
              <div
                    style={{
                            background: "#1f2937",
                                    borderRadius: "12px",
                                            padding: "20px",
                                                    color: "white",
                                                            minWidth: "200px",
                                                                    border: "1px solid #374151",
                                                                          }}
                                                                              >
                                                                                    <h4 style={{ margin: 0, color: "#9ca3af" }}>{title}</h4>

                                                                                          <h2 style={{ marginTop: "12px" }}>{value}</h2>
                                                                                              </div>
                                                                                                );
                                                                                                }

                                                                                                export default StatsCard;