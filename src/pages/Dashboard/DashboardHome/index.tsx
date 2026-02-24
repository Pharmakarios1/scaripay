import CustomButton from "@components/Button";
import { Card, Row, Col, Typography } from "antd";

//images
import GraphOnEmtystate from "@assets/graph.png";

const DashboardHome = () => {
  const { Text } = Typography;
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card className="h-35! bg-[#FFF8F4]!">
            <div className="flex  items-center justify-between gap-4 h-full">
              <div className="text-center w-1/2 h-full p-2">
                <Text className="text-[#FA7B20]! text-xl! font-semibold!">
                  Total Balance
                </Text>

                <div className="flex gap-3 items-center">
                  <p className="text-xl">Ar</p>
                  <p className="text-gray-600">
                    <span className="text-5xl font-semibold">0</span>: 00
                  </p>
                </div>
              </div>

              <div className="">
                <CustomButton
                  title="Add Money"
                  type="primary"
                  size="large"
                  className="text-white text-xl  "
                />
              </div>
            </div>
          </Card>
        </Col>
        {/* <Divider orientation="vertical" /> */}
        <Col xs={24} md={12}>
          <Card className="h-35! bg-gray-100! border-0">
            <div className="flex flex-col h-full ">
              <p className="text-xl text-[#757A89] font-normal mb-2">
                Measure your earnings at a glance
              </p>
              <div className="h-20 w-full">
                <img
                  src={GraphOnEmtystate}
                  alt="graph"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mt-6">
        <Col xs={24} md={8}>
          <Card>Card 3</Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>Card 4</Card>
        </Col>

        <Col xs={24} md={8}>
          <Card>Card 5</Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardHome;
