import CustomButton from "@components/Button";
import { Card, Row, Col, Divider } from "antd";

//images
import GraphOnEmtystate from "@assets/graph.png";
import pointValue from "@assets/point value.png";
import commission from "@assets/commision icon.png";
import GiftIcon from "@assets/Gift Icon.png";

const DashboardHome = () => {
  return (
    <div className="space-y-10">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card className="h-35! bg-[#FFF8F4]!">
            <div className="flex  items-center justify-between gap-4 h-full">
              <div className="md:text-center w-1/2 h-full ">
                <h4 className="text-[#FA7B20]! text-base! md:text-xl! font-semibold!">
                  Total Balance
                </h4>

                <div className="flex gap-3 items-center">
                  <p className="text-xl">Ar</p>
                  <p className="text-gray-600">
                    <span className="text-2xl sm:text-5xl font-semibold">
                      0
                    </span>
                    : 00
                  </p>
                </div>
              </div>

              <div className="">
                <CustomButton
                  title="Add Money"
                  type="primary"
                  size="large"
                  className="text-white  text-xl  "
                />
              </div>
            </div>
          </Card>
        </Col>
        <Divider orientation="vertical" className="md:h-35!" />
        <Col xs={24} md={11}>
          <Card className="h-35! bg-gray-100! border-0">
            <div className="flex flex-col h-full ">
              <p className="text-sm sm:text-xl text-[#757A89] font-normal mb-2">
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
      <div className="mt-6! text-[#BABCC4]">Point value & Incentives</div>
      <Row gutter={[16, 16]} className="mt-6">
        <Col xs={24} md={8}>
          <Card className="h-[170px]!">
            <div className="h-[60px] flex items-center gap-5">
              <div className="h-8 w-8 rounded-md bg-[#CD5805]/40 flex justify-center items-center">
                <img src={pointValue} className="w-5 h-5" />
              </div>
              <p className="text-[#757A89]">Total Point Value</p>
            </div>
            <p className="text-gray-600">
              <span className="text-2xl sm:text-5xl font-semibold">0</span>
            </p>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card className="h-[170px]!">
            <div className="h-[60px] flex items-center gap-5">
              <div className="h-8 w-8 rounded-md bg-[#6EE7B7]/40 flex justify-center items-center">
                <img src={commission} className="w-5 h-5" />
              </div>
              <p className="text-[#757A89]">Total Point Value</p>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-xl">Ar</p>
              <p className="text-gray-600">
                <span className="text-2xl sm:text-5xl font-semibold">0</span>:
                00
              </p>
            </div>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card className="bg-[#173AE5]! h-[170px]!">
            <div className="flex items-center justify-between">
              <p className="text-white text-base lg:text-[20px] font-semibold">
                Refer a Friend and Earn
              </p>
              <img src={GiftIcon} className="" />
            </div>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card className="h-35! bg-[#FFF8F4]!">recent acitvities</Card>
        </Col>
        <Col xs={24} md={12}>
          <Card className="h-35! bg-[#FFF8F4]!">latest transactions</Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardHome;
